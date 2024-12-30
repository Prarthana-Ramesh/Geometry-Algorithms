document.addEventListener('DOMContentLoaded', () => {
    const algorithms = [
        {
            title: "2D Convex Hull",
            description: "An algorithm to find the smallest convex polygon that encloses all points in a 2D plane.",
            href: "2dch.html",
            color: "linear-gradient(to bottom right, var(--indigo-400), var(--indigo-600))",
        },
        {
            title: "3D Convex Hull",
            description: "Extends the concept of 2D convex hulls to three-dimensional space.",
            href: "3dch.html",
            color: "linear-gradient(to bottom right, var(--purple-400), var(--purple-600))",
        },
        {
            title: "KD Trees",
            description: "A space-partitioning data structure for organizing points in k-dimensional space.",
            href: "kdtree.html",
            color: "linear-gradient(to bottom right, var(--pink-400), var(--pink-600))",
        },
        {
            title: "Delaunay Triangulation",
            description: "A triangulation method that maximizes the minimum angle of all triangles.",
            href: "dt.html",
            color: "linear-gradient(to bottom right, var(--fuchsia-400), var(--fuchsia-600))",
        },
        {
            title: "Voronoi Diagram",
            description: "A partition of a plane into regions close to each of a given set of objects.",
            href: "voronoi.html",
            color: "linear-gradient(to bottom right, var(--nana), var(--dada))",
        },
    ];

    const algorithmsGrid = document.querySelector('.algorithms-grid');
    const geometricSvg = document.querySelector('.geometric-svg');

    // Create algorithm cards
    algorithms.forEach((algorithm, index) => {
        const card = document.createElement('a');
        card.href = algorithm.href;
        card.className = 'algorithm-card';
        card.style.background = algorithm.color;
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';

        card.innerHTML = `
            <div class="algorithm-card-content">
                <h3>${algorithm.title}</h3>
                <p>${algorithm.description}</p>
                <svg class="chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
            </div>
        `;

        algorithmsGrid.appendChild(card);

        // Animate card entrance
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100 * index);
    });

    // Create geometric shapes in the header
    for (let i = 0; i < 20; i++) {
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('fill', 'rgba(255,255,255,0.1)');
        geometricSvg.appendChild(path);

        animatePath(path);
    }

    function animatePath(path) {
        const duration = 1000 + Math.random() * 10000;
        const animateScale = () => {
            const scale = Math.random() * 0.5 + 0.5;
            const d = `M${Math.random() * 100},${Math.random() * 100} L${Math.random() * 100},${Math.random() * 100} L${Math.random() * 100},${Math.random() * 100} Z`;
            
            path.setAttribute('d', d);
            path.style.transform = `scale(${scale})`;
            path.style.transition = `all ${duration}ms linear`;

            setTimeout(animateScale, duration);
        };

        animateScale();
    }

    // Animate header content
    const headerContent = document.querySelector('.header-content');
    headerContent.style.opacity = '0';
    headerContent.style.transform = 'translateY(-50px)';

    setTimeout(() => {
        headerContent.style.transition = 'opacity 1s ease, transform 1s ease';
        headerContent.style.opacity = '1';
        headerContent.style.transform = 'translateY(0)';
    }, 500);

    // Animate about section
    const aboutSection = document.querySelector('.about-section');
    aboutSection.style.opacity = '0';
    aboutSection.style.transform = 'translateY(50px)';

    setTimeout(() => {
        aboutSection.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        aboutSection.style.opacity = '1';
        aboutSection.style.transform = 'translateY(0)';
    }, 200);

    // Animate footer
    const footer = document.querySelector('footer');
    footer.style.opacity = '0';
    footer.style.transform = 'translateY(50px)';

    setTimeout(() => {
        footer.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        footer.style.opacity = '1';
        footer.style.transform = 'translateY(0)';
    }, 500);
});