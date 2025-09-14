class PasswordGacha {
    constructor() {
        this.password = '';
        this.stats = {
            total: 0,
            common: 0,
            rare: 0,
            epic: 0,
            legendary: 0
        };
        
        this.characters = {
            common: 'abcdefghijklmnoprstuvwy'.split(''),
            rare: 'zqx'.split(''),
            epic: '0123456789'.split(''),
            legendary: '!@#$%^&*()_+-=[]{}|;:,.<>?'.split('')
        };
        
        this.probabilities = {
            common: 60,
            rare: 25,
            epic: 12,
            legendary: 3
        };
        
        this.currentCharacter = null;
        this.isGachaInProgress = false;
        this.audioTimeouts = [];
        
        this.initializeElements();
        this.bindEvents();
        this.createParticles();
        this.updateStats();
    }
    
    initializeElements() {
        this.crate = document.getElementById('crate');
        this.gachaBtn = document.getElementById('gachaBtn');
        this.resetBtn = document.getElementById('resetBtn');
        this.copyBtn = document.getElementById('copyBtn');
        this.passwordText = document.getElementById('passwordText');
        this.characterReveal = document.getElementById('characterReveal');
        this.characterDisplay = document.getElementById('characterDisplay');
        this.rarityText = document.getElementById('rarityText');
        this.closeReveal = document.getElementById('closeReveal');
        this.addToPassword = document.getElementById('addToPassword');
        this.progressFill = document.getElementById('progressFill');
        this.rouletteWheel = document.getElementById('rouletteWheel');
        this.rouletteContainer = document.getElementById('rouletteContainer');
        
        this.totalGacha = document.getElementById('totalGacha');
        this.commonCount = document.getElementById('commonCount');
        this.rareCount = document.getElementById('rareCount');
        this.epicCount = document.getElementById('epicCount');
        this.legendaryCount = document.getElementById('legendaryCount');
    }
    
    bindEvents() {
        this.crate.addEventListener('click', () => this.performGacha());
        this.gachaBtn.addEventListener('click', () => this.performGacha());
        this.resetBtn.addEventListener('click', () => this.resetPassword());
        this.copyBtn.addEventListener('click', () => this.copyPassword());
        this.closeReveal.addEventListener('click', () => this.closeCharacterReveal());
        this.addToPassword.addEventListener('click', () => this.addCharacterToPassword());
        
        document.addEventListener('keydown', (e) => {
            if (e.code === 'Space' && !this.isGachaInProgress) {
                e.preventDefault();
                this.performGacha();
            }
            if (e.code === 'Escape') {
                this.closeCharacterReveal();
            }
        });
    }
    
    createParticles() {
        const particlesContainer = document.getElementById('particles');
        
        setInterval(() => {
            if (Math.random() < 0.1) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDuration = (2 + Math.random() * 3) + 's';
                particle.style.background = this.getRandomColor();
                
                particlesContainer.appendChild(particle);
                
                setTimeout(() => {
                    if (particle.parentNode) {
                        particle.parentNode.removeChild(particle);
                    }
                }, 5000);
            }
        }, 200);
    }
    
    getRandomColor() {
        const colors = ['#3498db', '#e74c3c', '#f39c12', '#27ae60', '#9b59b6'];
        return colors[Math.floor(Math.random() * colors.length)];
    }
    
    async performGacha() {
        if (this.isGachaInProgress) return;
        
        this.isGachaInProgress = true;
        this.gachaBtn.disabled = true;
        this.gachaBtn.textContent = 'Membuka...';
        
        this.animateProgressBar();
        this.crate.classList.add('opening');
        
        await this.delay(1500);
        
        const rarity = this.determineRarity();
        const character = this.getRandomCharacter(rarity);
        
        this.currentCharacter = { character, rarity };
        this.stats.total++;
        this.stats[rarity]++;
        
        await this.showCharacterReveal(character, rarity);
        
        this.crate.classList.remove('opening');
        this.gachaBtn.disabled = false;
        this.gachaBtn.textContent = 'Buka Crate!';
        this.isGachaInProgress = false;
        
        this.updateStats();
    }
    
    animateProgressBar() {
        let progress = 0;
        const interval = setInterval(() => {
            progress += 2;
            this.progressFill.style.width = progress + '%';
            
            if (progress >= 100) {
                clearInterval(interval);
                setTimeout(() => {
                    this.progressFill.style.width = '0%';
                }, 500);
            }
        }, 30);
    }
    
    playGachaSound() {
        this.audioTimeouts.forEach(timeout => clearTimeout(timeout));
        this.audioTimeouts = [];
        
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            
            this.playRouletteSpinSound(audioContext);
            
            const slowDownTimeout = setTimeout(() => {
                this.playSlowDownSound(audioContext);
            }, 1000);
            this.audioTimeouts.push(slowDownTimeout);
            
            const finalStopTimeout = setTimeout(() => {
                this.playFinalStopSound(audioContext);
            }, 2800);
            this.audioTimeouts.push(finalStopTimeout);
            
        } catch (e) {
            console.log('Audio not supported');
        }
    }
    
    stopGachaSound() {
        this.audioTimeouts.forEach(timeout => clearTimeout(timeout));
        this.audioTimeouts = [];
    }
    
    playRouletteSpinSound(audioContext) {
        for (let i = 0; i < 30; i++) {
            setTimeout(() => {
                const frequency = 800 + Math.random() * 200;
                this.createTone(audioContext, frequency, 0.05, 'square');
            }, i * 30);
        }
    }
    
    playSlowDownSound(audioContext) {
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                const frequency = 600 + Math.random() * 100;
                this.createTone(audioContext, frequency, 0.08, 'triangle');
            }, i * (50 + i * 5));
        }
    }
    
    playFinalStopSound(audioContext) {
        const frequency = 400;
        this.createTone(audioContext, frequency, 0.3, 'sine');
        setTimeout(() => {
            this.createTone(audioContext, frequency * 1.5, 0.2, 'sine');
        }, 100);
    }
    
    playResultSound(rarity) {
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            
            switch(rarity) {
                case 'common':
                    this.createTone(audioContext, 300, 0.2, 'sine');
                    break;
                case 'rare':
                    this.createTone(audioContext, 400, 0.3, 'sine');
                    setTimeout(() => this.createTone(audioContext, 500, 0.2, 'sine'), 150);
                    break;
                case 'epic':
                    for (let i = 0; i < 3; i++) {
                        setTimeout(() => {
                            this.createTone(audioContext, 600 + i * 100, 0.2, 'triangle');
                        }, i * 100);
                    }
                    break;
                case 'legendary':
                    for (let i = 0; i < 5; i++) {
                        setTimeout(() => {
                            this.createTone(audioContext, 800 + i * 100, 0.3, 'sine');
                        }, i * 80);
                    }
                    break;
            }
        } catch (e) {
            console.log('Audio not supported');
        }
    }
    
    createTone(audioContext, frequency, duration, type = 'sine') {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = frequency;
        oscillator.type = type;
        
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + duration);
    }
    
    generateRouletteItems() {
        const items = [];
        const allChars = [
            ...this.characters.common,
            ...this.characters.rare,
            ...this.characters.epic,
            ...this.characters.legendary
        ];
        
        for (let i = 0; i < 50; i++) {
            const randomChar = allChars[Math.floor(Math.random() * allChars.length)];
            const rarity = this.getCharacterRarity(randomChar);
            items.push({ character: randomChar, rarity });
        }
        
        return items;
    }
    
    getCharacterRarity(character) {
        if (this.characters.legendary.includes(character)) return 'legendary';
        if (this.characters.epic.includes(character)) return 'epic';
        if (this.characters.rare.includes(character)) return 'rare';
        return 'common';
    }
    
    createRouletteWheel(targetCharacter, targetRarity) {
        this.rouletteWheel.innerHTML = '';
        const items = this.generateRouletteItems();
        
        items[35] = { character: targetCharacter, rarity: targetRarity };
        
        items.forEach((item, index) => {
            const itemElement = document.createElement('div');
            itemElement.className = `roulette-item rarity-${item.rarity}`;
            itemElement.textContent = item.character;
            this.rouletteWheel.appendChild(itemElement);
        });
        
        return items;
    }
    
    animateRoulette(targetIndex) {
        const itemWidth = 150;
        const containerWidth = this.rouletteContainer.offsetWidth;
        const centerOffset = containerWidth / 2 - itemWidth / 2;
        
        const finalPosition = -(targetIndex * itemWidth - centerOffset);
        
        this.rouletteWheel.style.setProperty('--final-position', `${finalPosition}px`);
        this.rouletteWheel.classList.add('roulette-spinning');
        
        return new Promise(resolve => {
            setTimeout(() => {
                this.rouletteWheel.classList.remove('roulette-spinning');
                this.rouletteWheel.style.transform = `translateX(${finalPosition}px)`;
                resolve();
            }, 3000);
        });
    }
    
    determineRarity() {
        const random = Math.random() * 100;
        let cumulative = 0;
        
        for (const [rarity, probability] of Object.entries(this.probabilities)) {
            cumulative += probability;
            if (random <= cumulative) {
                return rarity;
            }
        }
        
        return 'common';
    }
    
    getRandomCharacter(rarity) {
        const characters = this.characters[rarity];
        return characters[Math.floor(Math.random() * characters.length)];
    }
    
    async showCharacterReveal(character, rarity) {
        this.characterReveal.style.display = 'flex';
        
        this.rarityText.textContent = '🎰 SPINNING...';
        this.rarityText.className = 'rarity-text';
        
        this.characterDisplay.style.opacity = '0';
        this.characterDisplay.textContent = '';
        
        this.rouletteWheel.style.transform = 'translateX(0px)';
        
        const items = this.createRouletteWheel(character, rarity);
        const targetIndex = 35;
        
        this.playGachaSound();
        
        await this.animateRoulette(targetIndex);
        
        this.stopGachaSound();
        this.playResultSound(rarity);
        
        const rarityNames = {
            common: '⚪ COMMON',
            rare: '🔵 RARE',
            epic: '🔴 EPIC',
            legendary: '🟡 LEGENDARY'
        };
        
        this.rarityText.textContent = rarityNames[rarity];
        this.rarityText.className = `rarity-text rarity-${rarity}`;
        
        setTimeout(() => {
            this.characterDisplay.textContent = character;
            this.characterDisplay.className = `character-display rarity-${rarity}`;
            this.characterDisplay.style.opacity = '1';
            
            if (rarity === 'legendary') {
                this.createLegendaryEffect();
            }
        }, 300);
    }
    
    createLegendaryEffect() {
        const colors = ['#f39c12', '#f1c40f', '#e67e22'];
        
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                const particle = document.createElement('div');
                particle.style.position = 'fixed';
                particle.style.left = '50%';
                particle.style.top = '50%';
                particle.style.width = '10px';
                particle.style.height = '10px';
                particle.style.background = colors[Math.floor(Math.random() * colors.length)];
                particle.style.borderRadius = '50%';
                particle.style.pointerEvents = 'none';
                particle.style.zIndex = '9999';
                
                const randomX = Math.random() * 400 - 200;
                const randomY = Math.random() * 400 - 200;
                particle.style.setProperty('--random-x', randomX);
                particle.style.setProperty('--random-y', randomY);
                
                particle.style.animation = `explode 1s ease-out forwards`;
                
                document.body.appendChild(particle);
                
                setTimeout(() => {
                    if (particle.parentNode) {
                        particle.parentNode.removeChild(particle);
                    }
                }, 1000);
            }, i * 50);
        }
    }
    
    closeCharacterReveal() {
        this.characterReveal.style.display = 'none';
        this.stopGachaSound();
        this.rouletteWheel.style.transform = 'translateX(0px)';
        this.rouletteWheel.innerHTML = '';
    }
    
    addCharacterToPassword() {
        if (this.currentCharacter) {
            this.password += this.currentCharacter.character;
            this.updatePasswordDisplay();
            this.closeCharacterReveal();
        }
    }
    
    updatePasswordDisplay() {
        if (this.password) {
            this.passwordText.textContent = this.password;
        } else {
            this.passwordText.textContent = 'Klik "Buka Crate" untuk mulai gacha!';
        }
    }
    
    resetPassword() {
        this.password = '';
        this.updatePasswordDisplay();
    }
    
    async copyPassword() {
        if (this.password) {
            try {
                await navigator.clipboard.writeText(this.password);
                this.copyBtn.textContent = 'Copied!';
                setTimeout(() => {
                    this.copyBtn.textContent = 'Copy Password';
                }, 1000);
            } catch (err) {
                console.log('Copy failed');
            }
        }
    }
    
    updateStats() {
        this.totalGacha.textContent = this.stats.total;
        this.commonCount.textContent = this.stats.common;
        this.rareCount.textContent = this.stats.rare;
        this.epicCount.textContent = this.stats.epic;
        this.legendaryCount.textContent = this.stats.legendary;
    }
    
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

const passwordGacha = new PasswordGacha();
