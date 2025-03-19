// Seleção dos elementos
const vitaminasTab = document.getElementById('vitaminas-tab');
const beneficiosTab = document.getElementById('beneficios-tab');
const plansTab = document.getElementById('plans-tab');

const vitaminasContent = document.getElementById('vitaminas-content');
const beneficiosContent = document.getElementById('beneficios-content');
const plansContent = document.getElementById('plans-content');

// Função para trocar de abas
function switchTab(activeTab, contentToShow) {
    // Oculta todos os conteúdos
    vitaminasContent.style.display = 'none';
    beneficiosContent.style.display = 'none';
    plansContent.style.display = 'none';

    // Remove a classe "active" de todas as abas
    vitaminasTab.classList.remove('active');
    beneficiosTab.classList.remove('active');
    plansTab.classList.remove('active');

    // Exibe o conteúdo correto e marca a aba ativa
    contentToShow.style.display = 'block';
    activeTab.classList.add('active');
}

// Adicionar eventos de clique
vitaminasTab.addEventListener('click', () => switchTab(vitaminasTab, vitaminasContent));
beneficiosTab.addEventListener('click', () => switchTab(beneficiosTab, beneficiosContent));
plansTab.addEventListener('click', () => switchTab(plansTab, plansContent));

// Inicialização - Exibe "Benefícios" por padrão
switchTab(beneficiosTab, beneficiosContent);