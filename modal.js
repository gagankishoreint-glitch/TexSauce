// Resource Modal Function - Updated to show FMHY resources
function showCategoryModal(category, cardElement) {
    const resourceData = fmhyResources[category];

    if (!resourceData) {
        console.error(`No resources found for category: ${category}`);
        return;
    }

    // Create modal overlay
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.95);
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2rem;
        overflow-y: auto;
        backdrop-filter: blur(10px);
        animation: fadeIn 0.3s ease;
    `;

    // Create modal content
    const modal = document.createElement('div');
    modal.className = 'resource-modal';
    modal.style.cssText = `
        background: #000000;
        border: 2px solid var(--color-primary);
        max-width: 1200px;
        width: 100%;
        max-height: 90vh;
        overflow-y: auto;
        padding: 0;
        position: relative;
        box-shadow: 0 0 50px rgba(0, 255, 255, 0.5);
        border-radius: 8px;
    `;

    // Build modal HTML
    let modalHTML = `
        <div style="position: sticky; top: 0; background: #000000; border-bottom: 2px solid var(--color-primary); padding: 2rem; z-index: 10;">
            <button class="modal-close" style="
                position: absolute;
                top: 1rem;
                right: 1rem;
                background: transparent;
                border: 2px solid var(--color-primary);
                color: var(--color-primary);
                width: 40px;
                height: 40px;
                font-size: 1.5rem;
                cursor: none;
                transition: all 0.3s ease;
                display: flex;
                align-items: center;
                justify-content: center;
            " onmouseover="this.style.background='var(--color-primary)'; this.style.color='#000000';" onmouseout="this.style.background='transparent'; this.style.color='var(--color-primary)';">
                ×
            </button>
            
            <h2 style="
                font-family: var(--font-heading);
                font-size: clamp(1.5rem, 4vw, 2.5rem);
                color: var(--color-primary);
                margin-bottom: 0.5rem;
                text-transform: uppercase;
                letter-spacing: 0.1em;
            ">
                ${resourceData.title}
            </h2>
            
            <p style="
                color: var(--color-text-dim);
                margin-bottom: 1rem;
                font-size: 1rem;
            ">
                ${resourceData.description}
            </p>
            
            <a href="${resourceData.fmhyUrl}" target="_blank" rel="noopener noreferrer" style="
                display: inline-flex;
                align-items: center;
                gap: 0.5rem;
                color: var(--color-secondary);
                text-decoration: none;
                font-size: 0.9rem;
                padding: 0.5rem 1rem;
                border: 1px solid var(--color-secondary);
                transition: all 0.3s ease;
            " onmouseover="this.style.background='var(--color-secondary)'; this.style.color='#000000';" onmouseout="this.style.background='transparent'; this.style.color='var(--color-secondary)';">
                <span>View Full FMHY Page</span>
                <span>↗</span>
            </a>
        </div>
        
        <div style="padding: 2rem;">
    `;

    // Add each category section
    resourceData.categories.forEach((cat, index) => {
        modalHTML += `
            <div style="margin-bottom: 3rem;">
                <h3 style="
                    font-family: var(--font-heading);
                    font-size: 1.5rem;
                    color: var(--color-text);
                    margin-bottom: 1.5rem;
                    padding-bottom: 0.5rem;
                    border-bottom: 1px solid rgba(0, 255, 255, 0.3);
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                ">
                    <span style="color: var(--color-primary);">[</span>
                    ${cat.name}
                    <span style="color: var(--color-primary);">]</span>
                </h3>
                
                <div style="
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
                    gap: 1rem;
                ">
        `;

        // Add links
        cat.links.forEach(link => {
            modalHTML += `
                <a href="${link.url}" target="_blank" rel="noopener noreferrer" 
                   class="resource-link"
                   style="
                        background: rgba(0, 255, 255, 0.05);
                        border: 1px solid rgba(0, 255, 255, 0.3);
                        padding: 1rem;
                        text-decoration: none;
                        display: block;
                        transition: all 0.3s ease;
                        position: relative;
                        overflow: hidden;
                    "
                    onmouseover="this.style.background='rgba(0, 255, 255, 0.1)'; this.style.borderColor='var(--color-primary)'; this.style.transform='translateY(-2px)'; this.style.boxShadow='0 0 20px rgba(0, 255, 255, 0.3)';"
                    onmouseout="this.style.background='rgba(0, 255, 255, 0.05)'; this.style.borderColor='rgba(0, 255, 255, 0.3)'; this.style.transform=''; this.style.boxShadow='';">
                    
                    <div style="
                        font-family: var(--font-heading);
                        font-size: 1.1rem;
                        color: var(--color-primary);
                        margin-bottom: 0.5rem;
                        font-weight: 700;
                    ">
                        ${link.name}
                    </div>
                    
                    <div style="
                        font-size: 0.85rem;
                        color: var(--color-text-dim);
                        line-height: 1.4;
                    ">
                        ${link.desc}
                    </div>
                    
                    <div style="
                        position: absolute;
                        top: 1rem;
                        right: 1rem;
                        color: var(--color-secondary);
                        font-size: 1.2rem;
                    ">
                        ↗
                    </div>
                </a>
            `;
        });

        modalHTML += `
                </div>
            </div>
        `;
    });

    modalHTML += `
        </div>
        
        <div style="
            text-align: center;
            padding: 2rem;
            border-top: 2px solid var(--color-primary);
            background: rgba(0, 255, 255, 0.02);
        ">
            <p style="color: var(--color-text-dim); margin-bottom: 1rem; font-size: 0.9rem;">
                ⚠️ Always use a VPN when accessing these resources. TexSauce is not responsible for content on external sites.
            </p>
            <p style="color: var(--color-text-dim); font-size: 0.85rem;">
                Resources provided by <a href="https://fmhy.net/" target="_blank" style="color: var(--color-primary); text-decoration: none;">FMHY</a>
            </p>
        </div>
    `;

    modal.innerHTML = modalHTML;
    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    // Prevent body scroll
    document.body.style.overflow = 'hidden';

    // Close handlers
    const closeModal = () => {
        overlay.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => {
            overlay.remove();
            document.body.style.overflow = '';
        }, 300);
    };

    modal.querySelector('.modal-close').addEventListener('click', closeModal);

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            closeModal();
        }
    });

    // Close on escape
    const escHandler = (e) => {
        if (e.key === 'Escape') {
            closeModal();
            document.removeEventListener('keydown', escHandler);
        }
    };
    document.addEventListener('keydown', escHandler);
}
