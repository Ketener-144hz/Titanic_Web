document.addEventListener('DOMContentLoaded', function() {
    // Adiciona o seletor de fonte ao body
    const fontSelector = document.createElement('div');
    fontSelector.className = 'font-size-selector';
    fontSelector.innerHTML = `
        <button class="font-size-btn" data-size="p">P</button>
        <button class="font-size-btn" data-size="m">M</button>
        <button class="font-size-btn" data-size="g">G</button>
    `;
    document.body.appendChild(fontSelector);

    // Função para atualizar o tamanho da fonte
    function updateFontSize(size) {
        // Remove classes antigas
        document.body.classList.remove('size-p', 'size-m', 'size-g');
        // Adiciona nova classe
        document.body.classList.add('size-' + size);
        
        // Atualiza botões ativos
        document.querySelectorAll('.font-size-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.size === size) {
                btn.classList.add('active');
            }
        });

        // Salva a preferência do usuário
        localStorage.setItem('preferredFontSize', size);
    }

    // Adiciona eventos aos botões
    document.querySelectorAll('.font-size-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            updateFontSize(btn.dataset.size);
        });
    });

    // Carrega preferência salva
    const savedSize = localStorage.getItem('preferredFontSize');
    if (savedSize) {
        updateFontSize(savedSize);
    }
});
