// Seleção dos elementos
const vitaminasTab = document.getElementById('vitaminas-tab');
const beneficiosTab = document.getElementById('beneficios-tab');

const vitaminasContent = document.getElementById('vitaminas-content');
const beneficiosContent = document.getElementById('beneficios-content');

// Função para trocar de abas
function switchTab(tab, contentToShow, contentToHide) {
    tab.classList.add('active');
    contentToShow.style.display = 'block';
    contentToHide.style.display = 'none';
}

// Adicionar eventos de clique
vitaminasTab.addEventListener('click', () => {
    switchTab(vitaminasTab, vitaminasContent, beneficiosContent);
    beneficiosTab.classList.remove('active');
});

beneficiosTab.addEventListener('click', () => {
    switchTab(beneficiosTab, beneficiosContent, vitaminasContent);
    vitaminasTab.classList.remove('active');
});

// Inicialização - Exibe "Benefícios" por padrão
beneficiosContent.style.display = 'block';