                document.getElementById('ingenuity-meeting-form').addEventListener('submit', async function(e) {
                    e.preventDefault();
                    
                    const form = this;
                    const btn = form.querySelector('button[type="submit"]');
                    const btnText = form.querySelector('.btn-text');
                    const originalText = btnText.innerText;
                    
                    // UI Feedback: Loading
                    btn.disabled = true;
                    btnText.innerText = 'מעבד...'; // "Processing..." in Hebrew

                    const formData = new FormData(form);
                    const data = Object.fromEntries(formData.entries());

                    try {
                        const response = await fetch("https://hook.eu2.make.com/jzsfva1frhs1ry71bj9hljm28ohaenoz", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(data)
                        });

                        if (response.ok) {
                            btnText.innerText = 'נשלח!'; // "Sent!"
                            
                            // Success Action: Scroll to contact section
                            const contactSection = document.getElementById('contact-section');
                            if (contactSection) {
                                contactSection.scrollIntoView({ behavior: 'smooth' });
                            }
                            
                            form.reset();
                        } else {
                            alert("שגיאה בשליחה. נסה שוב.");
                        }
                    } catch (error) {
                        console.error("Webhook Error:", error);
                        alert("תקלת תקשורת. בדוק את החיבור שלך.");
                    } finally {
                        // Reset button state after a delay
                        setTimeout(() => {
                            btn.disabled = false;
                            btnText.innerText = originalText;
                        }, 3000);
                    }
                });
document.getElementById('ingenuity-meeting-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const form = this;
    const btn = form.querySelector('button[type="submit"]');
    const btnText = form.querySelector('.btn-text');
    const originalText = btnText.innerText;
    
    // UI Feedback: Loading
    btn.disabled = true;
    btnText.innerText = 'מעבד...'; // "Processing..." in Hebrew

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
        const response = await fetch("https://hook.eu2.make.com/jzsfva1frhs1ry71bj9hljm28ohaenoz", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            btnText.innerText = 'נשלח!'; // "Sent!"
            
            // Success Action: Scroll to contact section
            const contactSection = document.getElementById('contact-section');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
            
            form.reset();
        } else {
            alert("שגיאה בשליחה. נסה שוב.");
        }
    } catch (error) {
        console.error("Webhook Error:", error);
        alert("תקלת תקשורת. בדוק את החיבור שלך.");
    } finally {
        // Reset button state after a delay
        setTimeout(() => {
            btn.disabled = false;
            btnText.innerText = originalText;
        }, 3000);
    }
});

            document.getElementById('xpera-lead-form').addEventListener('submit', async function(e) {
                e.preventDefault();
                
                const btn = this.querySelector('button[type="submit"]');
                const originalText = btn.innerHTML;
                
                // UI Feedback: Loading state
                btn.disabled = true;
                btn.innerHTML = '<span>שולח...</span>';

                const formData = new FormData(this);
                const data = Object.fromEntries(formData.entries());

                try {
                    const response = await fetch("https://hook.eu2.make.com/jzsfva1frhs1ry71bj9hljm28ohaenoz", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(data)
                    });

                    if (response.ok) {
                        alert("ההודעה נשלחה בהצלחה!"); // Success message in Hebrew
                        this.reset();
                    } else {
                        alert("אירעה שגיאה. נסה שוב מאוחר יותר.");
                    }
                } catch (error) {
                    console.error("Error:", error);
                    alert("שגיאת חיבור. בדוק את החיבור שלך לאינטרנט.");
                } finally {
                    btn.disabled = false;
                    btn.innerHTML = originalText;
                }
            });

        // --- ACCESSIBILITY LOGIC ---
        document.addEventListener('DOMContentLoaded', () => {
            const a11yBtn = document.getElementById('a11yBtn');
            const a11yMenu = document.getElementById('a11yMenu');

            if (a11yBtn && a11yMenu) {
                a11yBtn.addEventListener('click', () => {
                    const isOpen = !a11yMenu.classList.contains('opacity-0');
                    if (isOpen) {
                        a11yMenu.classList.add('opacity-0', 'pointer-events-none', 'scale-95');
                        a11yMenu.classList.remove('opacity-100', 'scale-100');
                    } else {
                        a11yMenu.classList.remove('opacity-0', 'pointer-events-none', 'scale-95');
                        a11yMenu.classList.add('opacity-100', 'scale-100');
                    }
                });
            }
        });

        let currentTextScale = 1;

        function toggleA11y(type) {
            if (type === 'contrast') {
                document.body.classList.toggle('a11y-high-contrast');
            } else if (type === 'focus') {
                document.body.classList.toggle('a11y-highlight-focus');
            }
        }

        function changeTextSize(step) {
            currentTextScale += step;
            // Limit scale between 0.8 and 1.5
            if (currentTextScale < 0.8) currentTextScale = 0.8;
            if (currentTextScale > 1.5) currentTextScale = 1.5;
            
            document.documentElement.style.fontSize = `${currentTextScale * 100}%`;
        }

        function resetA11y() {
            document.body.classList.remove('a11y-high-contrast', 'a11y-highlight-focus');
            currentTextScale = 1;
            document.documentElement.style.fontSize = '100%';
        }

        let animationsInitialized = false;

        function initAnimations() {
            if (animationsInitialized) return;
            
            // Polling to ensure GSAP is fully loaded in Canvas/iframe preview environments
            if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined' || typeof ScrollToPlugin === 'undefined') {
                setTimeout(initAnimations, 50);
                return;
            }

            animationsInitialized = true;
            gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

            // --- 1. HERO WARP ANIMATION ---
            const warpContainer = document.querySelector('.automation-warp-premium');
            if (warpContainer) {
                const linesCount = 100;
                for (let i = 0; i < linesCount; i++) {
                    const line = document.createElement('div');
                    line.className = 'warp-line-elegant';
                    
                    const angle = Math.random() * 360; 
                    const delay = Math.random() * -5; 
                    const duration = 3 + Math.random() * 4; 
                    const opacity = 0.2 + Math.random() * 0.6; 
                    const width = 80 + Math.random() * 50; 
                    const hue = 270 + Math.random() * 20; // Ensure hue stays strictly in deep purple range

                    line.style.setProperty('--angle', `${angle}deg`);
                    line.style.setProperty('--delay', `${delay}s`);
                    line.style.setProperty('--duration', `${duration}s`);
                    line.style.setProperty('--max-opacity', opacity);
                    line.style.width = `${width}vmax`;
                    line.style.background = `linear-gradient(90deg, transparent, hsl(${hue}, 80%, 70%), white, transparent)`;
                    
                    if (Math.random() > 0.7) {
                        line.style.filter = 'blur(1.5px)';
                    }

                    warpContainer.appendChild(line);
                }
            }

            // --- 2. PHONE SECTION ENTRANCE ---
            gsap.fromTo(".phone-mockup", 
                { x: 150, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: "#phone-section",
                        start: "top 75%",
                    },
                    x: 0,
                    opacity: 1,
                    duration: 1.4,
                    ease: "power3.out"
                }
            );
            
            gsap.fromTo(".bounce-text", 
                { x: -150, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: "#phone-section",
                        start: "top 75%",
                    },
                    x: 0,
                    opacity: 1,
                    duration: 1.4,
                    delay: 0.15,
                    ease: "power3.out"
                }
            );

            // --- 7. WORKFLOW CANVAS ---
            const wfSection = document.getElementById('workflow-section');
            const wfCanvas = document.getElementById('automation-canvas');
            const automationContainer = document.getElementById('automation-canvas-container');

            if (wfSection && wfCanvas && automationContainer) {
                function scaleCanvas() {
                    // Optimized for both mobile and desktop to scale properly without causing blank overflow
                    const scale = Math.min(1, automationContainer.clientWidth / 1200);
                    // Center mathematically taking the scale origin into account
                    wfCanvas.style.transform = `translate(-50%, -50%) scale(${scale})`;
                }
                window.addEventListener('resize', scaleCanvas);
                scaleCanvas();

                const torch = document.getElementById('torchlight');
                if (torch) {
                    wfSection.addEventListener('mousemove', (e) => {
                        const rect = wfSection.getBoundingClientRect();
                        const x = e.clientX - rect.left;
                        const y = e.clientY - rect.top;
                        
                        gsap.to(torch, { x: x - 245, y: y - 245, opacity: 1, duration: 0.1 });

                        const trace = document.createElement('div');
                        trace.className = 'jet-trace';
                        wfSection.appendChild(trace);
                        
                        gsap.set(trace, { x: x, y: y, xPercent: -50, yPercent: -50, scale: 1, opacity: 0.8 });
                        gsap.to(trace, { 
                            y: y - 20, 
                            scale: 0.1, 
                            opacity: 0, 
                            duration: 2, 
                            ease: "power2.out", 
                            onComplete: () => trace.remove() 
                        });
                    });
                    
                    wfSection.addEventListener('mouseleave', () => {
                        gsap.to(torch, { opacity: 0, duration: 0.5 });
                    });
                }

                const animPaths = document.querySelectorAll('.flow-path-anim');
                animPaths.forEach(path => {
                    const len = path.getTotalLength();
                    path.style.strokeDasharray = len;
                    path.style.strokeDashoffset = len;
                });

                let loopTl = gsap.timeline({ repeat: -1, paused: true });
                loopTl.to("#fn-1", { "--lit": 1, duration: 0.3 }, 0)
                      .to("#fn-1", { "--lit": 0.1, duration: 0.5 }, 0.5)
                      .to("#fn-2", { "--lit": 1, duration: 0.3 }, 0.8)
                      .to("#fn-2", { "--lit": 0.1, duration: 0.5 }, 1.5)
                      .to(".fn-group-2, #fn-3", { "--lit": 1, duration: 0.3 }, 1.8)
                      .to(".fn-group-2, #fn-3", { "--lit": 0.1, duration: 0.5 }, 2.5)
                      .to(".fn-group-4", { "--lit": 1, duration: 0.3 }, 2.8)
                      .to(".fn-group-4", { "--lit": 0.1, duration: 0.5 }, 3.5)
                      .to({}, { duration: 0.5 }, 3.5);

                function startInfiniteLoop() {
                    gsap.to('.flow-path-anim', { opacity: 0.3, duration: 0.5 });
                    gsap.to('.flow-node', { '--lit': 0.1, duration: 0.5 });
                    gsap.to('.data-packets', { opacity: 1, duration: 0.5 });
                    loopTl.play(0);
                }

                function stopInfiniteLoop() {
                    loopTl.pause();
                    gsap.to('.data-packets', { opacity: 0, duration: 0.3 });
                    gsap.to('.flow-path-anim', { opacity: 1, duration: 0.3 });
                }

                let scrubTl = gsap.timeline({
                    scrollTrigger: {
                        trigger: wfSection,
                        start: "top top",
                        end: "+=1250",
                        scrub: 1,
                        pin: true,
                        onLeave: () => startInfiniteLoop(),
                        onEnterBack: () => stopInfiniteLoop()
                    }
                });

                scrubTl.to("#fn-1", { "--lit": 1, duration: 0.1 })
                   .to("#path-anim-1", { strokeDashoffset: 0, duration: 0.5 })
                   .to("#fn-2", { "--lit": 1, duration: 0.1 })
                   .to(".path-group-2, #path-anim-3", { strokeDashoffset: 0, duration: 0.6 })
                   .to(".fn-group-2, #fn-3", { "--lit": 1, duration: 0.1 })
                   .to(".path-group-4", { strokeDashoffset: 0, duration: 0.5 })
                   .to(".fn-group-4", { "--lit": 1, duration: 0.1 })
                   .to({}, { duration: 0.5 });
            }

            // --- 7.5. GLOBE & GLASSMORPHISM POPUPS LOOP ---
            const popupContainers = document.querySelectorAll(".globe-popup-container");
            if (popupContainers.length > 0) {
                // Hide initially (Move them down and fade them out)
                gsap.set(popupContainers, { opacity: 0, scale: 0.85, y: 20 });

                // Create the infinite looping timeline
                const popupLoopTl = gsap.timeline({ repeat: -1, paused: true });
                
                popupLoopTl
                    // Pop them in sequentially across the map (Faster & smoother for the smaller map scale)
                    .to(popupContainers[0], { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "back.out(1.4)" })
                    .to(popupContainers[1], { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "back.out(1.4)" }, "-=0.25")
                    .to(popupContainers[2], { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "back.out(1.4)" }, "-=0.25")
                    .to(popupContainers[3], { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "back.out(1.4)" }, "-=0.25")
                    // Wait for 3.5 seconds to let the user read the locations
                    .to({}, { duration: 3.5 })
                    // Float them away smoothly (Clear the board)
                    .to(popupContainers, { opacity: 0, y: -15, scale: 0.9, duration: 0.4, stagger: 0.08, ease: "power2.in" })
                    // Tiny buffer before loop restarts
                    .to({}, { duration: 0.5 });

                // Trigger to start the loop when section enters viewport
                ScrollTrigger.create({
                    trigger: "#globe-popups-section",
                    start: "top 65%", // Trigger slightly earlier
                    onEnter: () => popupLoopTl.play(),
                    onLeave: () => popupLoopTl.pause(), // Pause for performance when out of view
                    onEnterBack: () => popupLoopTl.play(),
                    onLeaveBack: () => popupLoopTl.pause()
                });
            }

            // --- 7.6. IMPACT CARDS SLIDE & NUMBER COUNTER ---
            const impactCards = document.querySelectorAll(".impact-card");
            if(impactCards.length > 0) {
                // Hide completely off screen to the left initially
                gsap.set(impactCards, { xPercent: -100, opacity: 0 }); 

                let impactTl = gsap.timeline({
                    scrollTrigger: {
                        trigger: "#globe-popups-section",
                        start: "top 50%", 
                        toggleActions: "play none none reverse"
                    }
                });

                // Slide out sequentially
                impactTl.to(impactCards, {
                    xPercent: 0,
                    opacity: 1,
                    duration: 1.2,
                    stagger: 0.2,
                    ease: "back.out(1.1)"
                });

                // Number counting effect
                const counters = document.querySelectorAll('.counter');
                counters.forEach(counter => {
                    let target = parseInt(counter.getAttribute('data-target'));
                    let zero = { val: 0 };
                    
                    impactTl.to(zero, {
                        val: target,
                        duration: 2,
                        onUpdate: function() {
                            counter.innerText = Math.floor(zero.val);
                        },
                        ease: "power2.out"
                    }, "-=1"); // Overlaps with the sliding animation
                });
            }

            // --- 7.7 GLOBAL IMPACT CTA REVEAL ---
            gsap.fromTo(".global-cta-reveal",
                { opacity: 0, y: 50, scale: 0.95 },
                {
                    scrollTrigger: {
                        trigger: ".global-cta-reveal",
                        start: "top 85%", // Triggers slightly before fully in view
                        toggleActions: "play none none reverse"
                    },
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 1.2,
                    ease: "back.out(1.5)"
                }
            );

            // --- 3. SCATTERED ICONS TO CIRCLE ---
            const iconsData = [
                'http://new.xpera.io/wp-content/uploads/2026/04/scatter-icon-1.png',
                'http://new.xpera.io/wp-content/uploads/2026/04/scatter-icon-2.png',
                'http://new.xpera.io/wp-content/uploads/2026/04/scatter-icon-3.png',
                'http://new.xpera.io/wp-content/uploads/2026/04/scatter-icon-4.png',
                'http://new.xpera.io/wp-content/uploads/2026/04/scatter-icon-5.png',
                'http://new.xpera.io/wp-content/uploads/2026/04/scatter-icon-6.png',
                'http://new.xpera.io/wp-content/uploads/2026/04/scatter-icon-7.png',
                'http://new.xpera.io/wp-content/uploads/2026/04/scatter-icon-8.png',
                'http://new.xpera.io/wp-content/uploads/2026/04/scatter-icon-9.png',
                'http://new.xpera.io/wp-content/uploads/2026/04/scatter-icon-10.png',
                'http://new.xpera.io/wp-content/uploads/2026/04/scatter-icon-11.png',
                'http://new.xpera.io/wp-content/uploads/2026/04/scatter-icon-12.png',
                'http://new.xpera.io/wp-content/uploads/2026/04/scatter-icon-13.png',
                'http://new.xpera.io/wp-content/uploads/2026/04/scatter-icon-14.png',
                'http://new.xpera.io/wp-content/uploads/2026/04/scatter-icon-15.png',
                'http://new.xpera.io/wp-content/uploads/2026/04/scatter-icon-16.png',
                'http://new.xpera.io/wp-content/uploads/2026/04/scatter-icon-17.png',
                'http://new.xpera.io/wp-content/uploads/2026/04/scatter-icon-18.png',
                'http://new.xpera.io/wp-content/uploads/2026/04/scatter-icon-19.png',
                'http://new.xpera.io/wp-content/uploads/2026/04/scatter-icon-20.png',
                'http://new.xpera.io/wp-content/uploads/2026/04/scatter-icon-21.png',
                'http://new.xpera.io/wp-content/uploads/2026/04/scatter-icon-22.png',
                'http://new.xpera.io/wp-content/uploads/2026/04/scatter-icon-23.png'
            ];
            const iconContainer = document.getElementById('icon-container');
            
            if (iconContainer) {
                const iconWrappers = [];
                const radius = window.innerWidth > 768 ? 293 : 147; 

                iconsData.forEach((icon, i) => {
                    let wrapper = document.createElement('div');
                    wrapper.className = 'floating-icon-wrapper';
                    
                    let el = document.createElement('div');
                    el.className = 'floating-icon';
                    el.innerHTML = '<img src="' + icon + '" alt="Icon" class="w-full h-full object-contain scale-[0.6] drop-shadow-[0_0_12px_rgba(179,102,255,0.8)]" />';
                    
                    wrapper.appendChild(el);
                    iconContainer.appendChild(wrapper);
                    iconWrappers.push({ wrapper, el });

                    gsap.to(el, {
                        x: () => (Math.random() - 0.5) * 40,
                        y: () => (Math.random() - 0.5) * 40,
                        rotation: () => (Math.random() - 0.5) * 20,
                        duration: 3 + Math.random() * 2,
                        repeat: -1,
                        yoyo: true,
                        ease: "sine.inOut"
                    });
                });

                let tlCircle = gsap.timeline({
                    scrollTrigger: {
                        trigger: "#scatter-circle-section",
                        start: "top top",       
                        end: "+=800",           
                        pin: true,              
                        scrub: 0.5              
                    }
                });

                // UPDATED: Initial state for satisfying pop reveal
                gsap.set("#purple-reveal-text", { opacity: 0, scale: 0.4, y: 40 });

                // UPDATED: Smooth, bouncy and colorful text reveal
                tlCircle.to("#purple-reveal-text", { 
                    opacity: 1, 
                    scale: 1, 
                    y: 0, 
                    duration: 1.2, 
                    ease: "back.out(1.5)" 
                }, 0);

                iconWrappers.forEach((item, i) => {
                    const angle = (i / iconsData.length) * Math.PI * 2;
                    
                    const scatterXIn = (Math.random() - 0.5) * (window.innerWidth * 0.8);
                    const scatterYIn = (Math.random() - 0.5) * (window.innerHeight * 0.7);

                    const circleX = Math.cos(angle) * radius;
                    const circleY = Math.sin(angle) * radius;

                    gsap.set(item.wrapper, { x: scatterXIn, y: scatterYIn, rotation: Math.random() * 180, opacity: 0.4 });

                    tlCircle.to(item.wrapper, { x: circleX, y: circleY, rotation: 0, opacity: 1, duration: 1, ease: "power1.inOut" }, 0);
                });

                gsap.to(iconContainer, {
                    rotation: 360,
                    duration: 60,
                    repeat: -1,
                    ease: "none"
                });
            }

            // --- 4. OWNERS SECTION SLIDE-IN ---
            gsap.fromTo(".owner-card-purple", 
                { x: -200, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: "#owners-section",
                        start: "top 75%",
                        toggleActions: "play none none reverse" 
                    },
                    x: 0,
                    opacity: 1,
                    duration: 3.6, 
                    ease: "back.out(1.2)" 
                }
            );
            
            gsap.fromTo(".owner-card-green", 
                { x: 200, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: "#owners-section",
                        start: "top 75%",
                        toggleActions: "play none none reverse" 
                    },
                    x: 0,
                    opacity: 1,
                    duration: 3.6, 
                    ease: "back.out(1.2)" 
                }
            );

            // --- 5. SATISFYING TEXT REVEAL UNDER OWNERS ---
            const textRevealContainer = document.querySelector('.scroll-reveal-container');
            if (textRevealContainer) {
                const headings = textRevealContainer.querySelectorAll('h2');
                
                // Split the text into words for a staggered 3D typing effect
                headings.forEach((heading) => {
                    let spans;
                    
                    if (heading.classList.contains('pre-split')) {
                        // Use pre-defined spans to respect manual coloring
                        spans = heading.querySelectorAll('span');
                    } else {
                        const text = heading.textContent.trim();
                        heading.innerHTML = ''; // Clear current text
                        heading.style.perspective = '800px'; // Add 3D perspective
                        
                        const words = text.split(/\s+/);
                        words.forEach((word) => {
                            const span = document.createElement('span');
                            // Use non-breaking space to keep word spacing intact
                            span.textContent = word + '\u00A0'; 
                            span.style.display = 'inline-block';
                            span.style.opacity = '0'; // Hide initially
                            heading.appendChild(span);
                        });
                        spans = heading.children;
                    }

                    // Trigger animation exactly when THIS specific heading enters the viewport
                    gsap.fromTo(spans, 
                        { 
                            y: 60, 
                            opacity: 0, 
                            rotationX: -90, 
                            scale: 0.5, 
                            color: "#7e22ce", // Start with deep glowing purple
                            textShadow: "0 0 20px rgba(179,102,255,1)"
                        },
                        {
                            scrollTrigger: {
                                trigger: heading,
                                start: "top 85%", // Triggers right as the heading enters the screen
                                toggleActions: "play none none reverse"
                            },
                            y: 0,
                            opacity: 1,
                            rotationX: 0,
                            scale: 1,
                            color: (index, target) => target.dataset.finalColor || "#f3e8ff", // Transition to target color or bright purplish white
                            textShadow: "0 0 15px rgba(179,102,255,0.4)",
                            duration: 1.8, // UPDATED: 0.75x of the slow duration
                            stagger: 0.15, // UPDATED: 0.75x delay between words
                            ease: "back.out(2)" // Very bouncy and satisfying finish
                        }
                    );
                });

                // 2. Animate the sub-features (bullets) smoothly after the title
                const subtextSpans = textRevealContainer.querySelectorAll('p span');
                if(subtextSpans.length) {
                    gsap.fromTo(subtextSpans, 
                        { opacity: 0, scale: 0.5 },
                        {
                            scrollTrigger: {
                                trigger: textRevealContainer.querySelector('p'),
                                start: "top 90%",
                                toggleActions: "play none none reverse"
                            },
                            opacity: 1,
                            scale: 1,
                            duration: 1.2, // UPDATED: 0.75x of the slow duration
                            stagger: 0.22, // UPDATED: 0.75x delay between elements
                            ease: "back.out(1.5)"
                        }
                    );
                }
            }

            // --- 8. STACKED CARDS SPREAD ---
            const cards = document.querySelectorAll('.testimonial-card');
            
            if (cards.length >= 3) {
                if (window.innerWidth >= 768) {
                    // Desktop Animation: Spread from center
                    gsap.set(cards, {
                        y: 50,
                        scale: 0.9,
                        opacity: 0,
                        rotation: () => (Math.random() - 0.5) * 10
                    });

                    let stackTl = gsap.timeline({
                        scrollTrigger: {
                            trigger: "#testimonials-section",
                            start: "top 60%",
                            end: "bottom 40%",
                            scrub: 2.5
                        }
                    });

                    stackTl.to(cards[0], { x: 380, y: 0, scale: 1, opacity: 1, rotation: 5, zIndex: 1, duration: 1 }, 0);
                    stackTl.to(cards[1], { x: 0, y: 0, scale: 1.05, opacity: 1, rotation: 0, zIndex: 2, duration: 1 }, 0);
                    stackTl.to(cards[2], { x: -380, y: 0, scale: 1, opacity: 1, rotation: -5, zIndex: 1, duration: 1 }, 0);
                } else {
                    // Mobile Animation: Simple vertical reveal
                    gsap.set(cards, { y: 40, opacity: 0 });
                    
                    gsap.to(cards, {
                        scrollTrigger: {
                            trigger: "#cards-container",
                            start: "top 80%",
                            toggleActions: "play none none reverse"
                        },
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        stagger: 0.2,
                        ease: "power3.out"
                    });
                }
            }

            // --- 8.2 STATS BANNER REVEAL ---
            gsap.fromTo(".stats-banner-reveal",
                { opacity: 0, y: 50, scale: 0.95 },
                {
                    scrollTrigger: {
                        trigger: ".stats-banner-reveal",
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    },
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 1.2,
                    ease: "back.out(1.5)"
                }
            );

            // --- 8.4 & 8.5. SERVICES SCROLL ANIMATION (REMOVED PINNING FOR PERFORMANCE) ---
            const serviceCards = document.querySelectorAll(".service-card");
            
            // Simple lightweight scroll reveal (no pinning/scrubbing that slows the page)
            const servicesTl = gsap.timeline({
                scrollTrigger: {
                    trigger: "#services-section",
                    start: "top 80%", // Triggers naturally as user scrolls down
                    toggleActions: "play none none reverse"
                }
            });

            // 1. Heading pops in automatically
            servicesTl.fromTo(".services-heading-pop", 
                { opacity: 0, y: 50, scale: 0.9 },
                { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "back.out(1.5)" }
            );

            // 2. All 4 cards fade & slide up automatically without stopping the scroll
            servicesTl.fromTo(serviceCards,
                { opacity: 0, y: 60, filter: "blur(10px)" },
                {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power3.out"
                },
                "-=0.2"
            );

            // --- 9. FORM SLIDE-IN ANIMATION (Growing from ground up) ---
            // Set the origin to the bottom so it physically "grows" upwards
            gsap.set(".vintage-horizontal-form", { transformOrigin: "bottom center" });
            gsap.fromTo(".vintage-horizontal-form", 
                { 
                    y: 250, // Starts deep from the ground
                    opacity: 0,
                    scaleY: 0.7, // Squashed at the base
                    scaleX: 0.9, // Slightly narrow
                    filter: "blur(20px)" 
                },
                {
                    scrollTrigger: {
                        trigger: ".vintage-horizontal-form",
                        start: "top 85%", // Trigger so the user sees the full growth
                        once: true // Ensures the animation only plays once and never reverses
                    },
                    y: 0,
                    opacity: 1,
                    scaleY: 1,
                    scaleX: 1,
                    filter: "blur(0px)",
                    duration: 1.44, // 1.25 times faster (was 1.8)
                    ease: "power3.out" // Stronger initial pop that smooths out
                }
            );

        } // End initAnimations

        // Start initialization process
        document.addEventListener("DOMContentLoaded", initAnimations);
        // Fallback for some preview environments where DOMContentLoaded behaves differently
        window.addEventListener("load", initAnimations);
        // Safety execution in case events were missed
        initAnimations();
  
