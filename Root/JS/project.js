 // Project data for modern modal
 const projectData = {
    // Photo Editing Projects
    'photo1': {
        title: "Portrait Retouching Project",
        description: "Professional portrait retouching that enhances natural features while maintaining authenticity. This project involved skin smoothing, blemish removal, color correction, and subtle reshaping to bring out the subject's best qualities.",
        skills: ["Adobe Photoshop", "Frequency Separation", "Dodge & Burn", "Color Grading"],
        link: "#",
        images: [
            "",
            "",
            "",
            ""
        ]
    },
    'photo2': {
        title: "Landscape Enhancement Project",
        description: "Transforming ordinary landscape photos into breathtaking scenes through careful color grading, exposure blending, and selective enhancement. This project showcases before-and-after comparisons of natural landscapes.",
        skills: ["Lightroom", "Luminosity Masking", "HDR Processing", "Selective Color"],
        link: "#",
        images: [
            "",
            "",
            "",
            ""
        ]
    },
    'photo3': {
        title: "E-commerce Product Photography",
        description: "Professional product photo editing for e-commerce platforms. This project involved background removal, color correction, shadow creation, and consistency across multiple product angles.",
        skills: ["Clipping Path", "Color Matching", "Shadow Creation", "Batch Processing"],
        link: "#",
        images: [
            "",
            "",
            "",
            ""
        ]
    },
    'photo4': {
        title: "Creative Composite Artwork",
        description: "Digital compositing combining multiple images into seamless fantasy scenes. This project involved advanced masking, lighting adjustment, and perspective matching to create believable impossible scenes.",
        skills: ["Layer Masking", "Perspective Warping", "Light Matching", "Atmospheric Effects"],
        link: "#",
        images: [
            "",
            "",
            "",
            ""
        ]
    },
    // Video Editing Projects
    'video1': {
        title: "Commercial Video Project",
        description: "30-second promotional video for a local business, featuring dynamic cuts, motion graphics, and color grading to create an engaging advertisement that increased customer engagement by 40%.",
        skills: ["Adobe Premiere Pro", "After Effects", "Color Grading", "Motion Graphics"],
        link: "#",
        images: [
            "",
            "",
            "",
            ""
        ]
    },
    'video2': {
        title: "Corporate Video Project",
        description: "Company profile video showcasing corporate culture, services, and team members. This project involved interview editing, b-roll synchronization, and subtle motion graphics to maintain a professional tone.",
        skills: ["Interview Editing", "B-Roll Integration", "Lower Thirds", "Audio Sweetening"],
        link: "#",
        images: [
            "",
            "",
            "",
            ""
        ]
    },
    'video3': {
        title: "Documentary Editing Project",
        description: "Short documentary film about urban sustainability, featuring a mix of interviews, archival footage, and newly shot material. This project required narrative structuring and careful pacing.",
        skills: ["Story Structure", "Archival Footage", "Color Matching", "Audio Mixing"],
        link: "#",
        images: [
            "",
            "",
            "",
            ""
        ]
    },
    'video4': {
        title: "Motion Graphics Project",
        description: "Animated explainer video for a tech startup, combining 2D animation with kinetic typography to clearly explain complex concepts in an engaging 90-second format.",
        skills: ["After Effects", "Character Animation", "Kinetic Typography", "Sound Design"],
        link: "#",
        images: [
            "",
            "",
            "",
            ""
        ]
    },
    // Logo Design Projects
    'logo1': {
        title: "Minimalist Logo Design",
        description: "Clean and modern logo design for a contemporary architecture firm. The design process involved extensive research into the industry and multiple iterations to achieve the perfect balance of simplicity and meaning.",
        skills: ["Adobe Illustrator", "Typography", "Negative Space", "Brand Identity"],
        link: "#",
        images: [
            "",
            "",
            "",
            ""
        ]
    },
    'logo2': {
        title: "Mascot Logo Design",
        description: "Friendly mascot character for a children's educational app. The design process included multiple sketches, color studies, and simplification to create an appealing yet versatile character that works at various sizes.",
        skills: ["Character Design", "Vector Illustration", "Color Psychology", "Simplification"],
        link: "#",
        images: [
            "",
            "",
            "",
            ""
        ]
    },
    'logo3': {
        title: "Typography Logo Design",
        description: "Elegant wordmark for a luxury fashion brand. The custom letterforms were carefully crafted to convey sophistication and exclusivity while maintaining excellent readability at all sizes.",
        skills: ["Custom Typography", "Letterform Design", "Kerning", "Brand Positioning"],
        link: "#",
        images: [
            "",
            "",
            "",
            ""
        ]
    },
    'logo4': {
        title: "Emblem Logo Design",
        description: "Classic emblem design for a craft brewery, combining traditional badge elements with modern aesthetics. The design works equally well on bottles, merchandise, and digital platforms.",
        skills: ["Emblem Design", "Detail Refinement", "Versatility Testing", "Print Preparation"],
        link: "#",
        images: [
            "",
            "",
            "",
            ""
        ]
    },
    // Web Development Projects
    'web1': {
        title: "E-commerce Website Development",
        description: "Custom e-commerce platform built with React and Node.js, featuring product filtering, cart functionality, and secure checkout. The responsive design works seamlessly across all devices.",
        skills: ["React", "Node.js", "MongoDB", "Payment Integration"],
        link: "#",
        images: [
            "",
            "",
            "",
            ""
        ]
    },
    'web2': {
        title: "Corporate Website Redesign",
        description: "Complete redesign of a corporate website with improved information architecture, faster load times, and modern aesthetics. The project involved content strategy and migration from an outdated CMS.",
        skills: ["WordPress", "SEO Optimization", "Performance Tuning", "UX Design"],
        link: "#",
        images: [
            "",
            "",
            "",
            ""
        ]
    },
    'web3': {
        title: "Custom Web Application",
        description: "Data visualization dashboard for financial analytics, featuring real-time updates, interactive charts, and role-based access control. The application processes large datasets efficiently.",
        skills: ["D3.js", "WebSockets", "Authentication", "Data Processing"],
        link: "#",
        images: [
            "",
            "",
            "",
            ""
        ]
    },
    'web4': {
        title: "Portfolio Website Development",
        description: "Custom portfolio website for a photographer, featuring a minimalist design that puts the focus on the visual work. The site includes a custom image gallery with lazy loading.",
        skills: ["HTML5/CSS3", "JavaScript", "Responsive Design", "Image Optimization"],
        link: "#",
        images: [
            "",
            "",
            "",
            ""
        ]
    },
    // Computer Hardware Projects
    'hardware1': {
        title: "High-End Gaming PC Build",
        description: "Custom gaming PC with liquid cooling, RGB lighting, and top-tier components for 4K gaming. The build features careful cable management and thermal optimization for peak performance.",
        skills: ["Component Selection", "Thermal Management", "Cable Management", "Overclocking"],
        link: "#",
        images: [
            "",
            "",
            "",
            ""
        ]
    },
    'hardware2': {
        title: "Content Creation Workstation",
        description: "Powerful workstation optimized for video editing and 3D rendering, featuring multi-core processors, fast storage, and professional-grade graphics. The system is tuned for stability under heavy workloads.",
        skills: ["Workstation Build", "Component Compatibility", "Performance Tuning", "Professional GPUs"],
        link: "#",
        images: [
            "",
            "",
            "",
            ""
        ]
    },
    'hardware3': {
        title: "Home Server Setup",
        description: "Custom NAS solution for home media storage and backup, featuring RAID configuration, remote access, and automated backups. The system is energy-efficient while providing reliable storage.",
        skills: ["NAS Configuration", "RAID Setup", "Network Security", "Remote Access"],
        link: "#",
        images: [
            "",
            "",
            "",
            ""
        ]
    },
    'hardware4': {
        title: "Small Form Factor PC",
        description: "Compact yet powerful mini-ITX build that fits in a backpack while delivering desktop-level performance. The project involved careful component selection and thermal solution design for the small space.",
        skills: ["SFF Build", "Thermal Solutions", "Compact Cable Management", "Component Optimization"],
        link: "#",
        images: [
            "",
            "",
            "",
            ""
        ]
    },
    // UX Design Projects
    'ux1': {
        title: "Mobile App UX Design",
        description: "User experience design for a fitness tracking app, featuring intuitive navigation, personalized dashboards, and motivational elements. The design process included user research and iterative prototyping.",
        skills: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
        link: "#",
        images: [
            "",
            "",
            "",
            ""
        ]
    },
    'ux2': {
        title: "Analytics Dashboard UX",
        description: "Redesign of a complex analytics dashboard to improve data comprehension and decision-making. The new design features better information hierarchy, interactive elements, and customizable views.",
        skills: ["Information Architecture", "Data Visualization", "Interaction Design", "User Testing"],
        link: "#",
        images: [
            "",
            "",
            "",
            ""
        ]
    },
    'ux3': {
        title: "E-commerce Checkout Flow",
        description: "Streamlined checkout process that reduced cart abandonment by 35%. The redesign focused on reducing steps, adding progress indicators, and building trust through clear information.",
        skills: ["Conversion Optimization", "Checkout Flow", "Trust Signals", "A/B Testing"],
        link: "#",
        images: [
            "",
            "",
            "",
            ""
        ]
    },
    'ux4': {
        title: "Onboarding Experience",
        description: "Redesigned onboarding flow that increased user retention by 50%. The new experience provides progressive disclosure of features, contextual help, and celebrates early achievements.",
        skills: ["Onboarding Design", "User Education", "Progressive Disclosure", "Retention Strategies"],
        link: "#",
        images: [
            "",
            "",
            "",
            ""
        ]
    }
};

// Function to open regular modal (photoModal)
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
    
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('show');
    
    setTimeout(() => {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }, 300);
}

// Modern Modal Functions
function openModernModal(projectId) {
    const modalOverlay = document.getElementById("modalOverlay");
    const project = projectData[projectId];
    
    if (!modalOverlay || !project) return;
    
    // Set project data in modal
    document.getElementById('modernModalTitle').textContent = project.title;
    document.getElementById('modernModalDescription').textContent = project.description;
    
    // Clear and add skills
    const skillsContainer = document.getElementById('modernModalSkills');
    skillsContainer.innerHTML = '';
    project.skills.forEach(skill => {
        const skillTag = document.createElement('span');
        skillTag.className = 'skill-tag';
        skillTag.textContent = skill;
        skillsContainer.appendChild(skillTag);
    });
    
    // Set project link
    document.getElementById('modernModalLink').href = project.link;
    
    // Set images in collage
    const collageContainer = document.getElementById('modernModalCollage');
    const collageItems = collageContainer.querySelectorAll('.collage-item img');
    project.images.forEach((imgSrc, index) => {
        if (collageItems[index]) {
            collageItems[index].src = imgSrc;
            collageItems[index].alt = project.title + ' image ' + (index + 1);
        }
    });
    
    // Show modal
    modalOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
    
    setTimeout(() => {
        modalOverlay.style.opacity = "1";
    }, 10);
}

function closeModernModal() {
    const modalOverlay = document.getElementById("modalOverlay");
    if (!modalOverlay) return;
    
    modalOverlay.style.opacity = "0";
    
    setTimeout(() => {
        modalOverlay.classList.remove("active");
        document.body.style.overflow = "auto";
    }, 300);
}

// Event Listeners for all gallery buttons
document.addEventListener('DOMContentLoaded', function() {
    // Close modals when clicking outside
    window.addEventListener("click", function(e) {
        // For regular modals
        if (e.target.classList.contains('modal')) {
            closeModal(e.target.id);
        }
        // For modern modal
        if (e.target === document.getElementById("modalOverlay")) {
            closeModernModal();
        }
    });

    // Close with Escape key
    document.addEventListener("keydown", function(e) {
        if (e.key === "Escape") {
            // Close modern modal if open
            const modalOverlay = document.getElementById("modalOverlay");
            if (modalOverlay && modalOverlay.classList.contains("active")) {
                closeModernModal();
            }
            // Close regular modals if open
            const openModals = document.querySelectorAll('.modal[style*="display: flex"]');
            openModals.forEach(modal => {
                closeModal(modal.id);
            });
        }
    });
});