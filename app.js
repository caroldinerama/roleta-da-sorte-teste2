// Application data - exact data from the official source
const giftCardsData = [
    {"name": "Zift", "category": "Multimarcas", "description": "Plataforma de gift cards multimarcas", "usage": "Loja Física e Online", "icon": "🎁"},
    {"name": "Zift Food", "category": "Gastronomia", "description": "Gift cards para alimentação e delivery", "usage": "Loja Física e Online", "icon": "🍽️"},
    {"name": "Rappi", "category": "Delivery", "description": "Delivery de comida e produtos", "usage": "Online", "icon": "🚚"},
    {"name": "Madero", "category": "Gastronomia", "description": "Hambúrgueres gourmet", "usage": "Loja Física e Online", "icon": "🍔"},
    {"name": "Outback Steakhouse", "category": "Gastronomia", "description": "Restaurante australiano", "usage": "Loja Física", "icon": "🥩"},
    {"name": "Coco Bambu", "category": "Gastronomia", "description": "Restaurante de frutos do mar", "usage": "Loja Física e Online", "icon": "🦐"},
    {"name": "Applebee's", "category": "Gastronomia", "description": "Restaurante americano", "usage": "Loja Física", "icon": "🇺🇸"},
    {"name": "Fogo de Chão", "category": "Gastronomia", "description": "Churrascaria premium", "usage": "Loja Física", "icon": "🔥"},
    {"name": "Pobre Juan", "category": "Gastronomia", "description": "Restaurante argentino", "usage": "Loja Física", "icon": "🇦🇷"},
    {"name": "Bráz Pizzaria", "category": "Gastronomia", "description": "Pizzaria artesanal", "usage": "Loja Física", "icon": "🍕"},
    {"name": "Abbraccio", "category": "Gastronomia", "description": "Restaurante italiano", "usage": "Loja Física", "icon": "🇮🇹"},
    {"name": "Camarada Camarão", "category": "Gastronomia", "description": "Restaurante de frutos do mar", "usage": "Loja Física", "icon": "🦐"},
    {"name": "Sushito", "category": "Gastronomia", "description": "Restaurante japonês", "usage": "Loja Física", "icon": "🍣"},
    {"name": "Jeronimo", "category": "Gastronomia", "description": "Hamburgueria premium", "usage": "Loja Física e Online", "icon": "🍔"},
    {"name": "Johnny Joy", "category": "Gastronomia", "description": "Sorveteria artesanal", "usage": "Loja Física", "icon": "🍨"},
    {"name": "Ao Gosto", "category": "Gastronomia", "description": "Restaurante contemporâneo", "usage": "Loja Física e Online", "icon": "🍽️"},
    {"name": "Di Paolo", "category": "Gastronomia", "description": "Cafeteria especializada", "usage": "Loja Física", "icon": "☕"},
    {"name": "Gurumê", "category": "Gastronomia", "description": "Restaurante gourmet", "usage": "Loja Física", "icon": "👨‍🍳"},
    {"name": "We Coffee", "category": "Café", "description": "Cafeteria especializada", "usage": "Loja Física", "icon": "☕"},
    {"name": "Café Orfeu", "category": "Café", "description": "Cafés especiais premium", "usage": "Online", "icon": "☕"},
    {"name": "Dengo", "category": "Doces", "description": "Chocolates artesanais", "usage": "Online", "icon": "🍫"},
    {"name": "Bacio di Latte", "category": "Sobremesas", "description": "Gelatos artesanais italianos", "usage": "Loja Física", "icon": "🍨"},
    {"name": "Kopenhagen", "category": "Doces", "description": "Chocolates premium", "usage": "Online", "icon": "🍫"},
    {"name": "Brasil Cacau", "category": "Doces", "description": "Chocolates brasileiros", "usage": "Online", "icon": "🍫"},
    {"name": "C&A", "category": "Moda", "description": "Moda para toda família", "usage": "Loja Física e Online", "icon": "👕"},
    {"name": "Riachuelo", "category": "Moda", "description": "Moda e casa", "usage": "Loja Física e Online", "icon": "👗"},
    {"name": "Nike", "category": "Esportes", "description": "Artigos esportivos", "usage": "Loja Física e Online", "icon": "👟"},
    {"name": "Vans", "category": "Streetwear", "description": "Calçados e streetwear", "usage": "Online", "icon": "👟"},
    {"name": "Loungerie", "category": "Moda", "description": "Moda íntima feminina", "usage": "Loja Física e Online", "icon": "👙"},
    {"name": "Anacapri", "category": "Calçados", "description": "Calçados femininos", "usage": "Online", "icon": "👠"},
    {"name": "Arezzo", "category": "Calçados", "description": "Calçados femininos", "usage": "Online", "icon": "👠"},
    {"name": "Schutz", "category": "Calçados", "description": "Calçados femininos de luxo", "usage": "Online", "icon": "👠"},
    {"name": "Oscar Calçados", "category": "Calçados", "description": "Calçados confortáveis", "usage": "Loja Física e Online", "icon": "👞"},
    {"name": "Havaianas", "category": "Calçados", "description": "Sandálias brasileiras", "usage": "Loja Física", "icon": "🩴"},
    {"name": "Vila Romana", "category": "Moda", "description": "Moda masculina", "usage": "Loja Física e Online", "icon": "👔"},
    {"name": "Democrata", "category": "Calçados", "description": "Calçados masculinos", "usage": "Online", "icon": "👞"},
    {"name": "Reserva", "category": "Moda", "description": "Moda masculina lifestyle", "usage": "Online", "icon": "👔"},
    {"name": "Santa Lolla", "category": "Calçados", "description": "Calçados femininos", "usage": "Loja Física", "icon": "👠"},
    {"name": "Crocs", "category": "Calçados", "description": "Calçados confortáveis", "usage": "Loja Física e Online", "icon": "👡"},
    {"name": "Centauro", "category": "Esportes", "description": "Artigos esportivos e lifestyle", "usage": "Loja Física e Online", "icon": "⚽"},
    {"name": "Fuel", "category": "Esportes", "description": "Moda fitness", "usage": "Loja Física", "icon": "🏃"},
    {"name": "Tok&Stok", "category": "Casa", "description": "Móveis e decoração", "usage": "Loja Física e Online", "icon": "🛋️"},
    {"name": "Casas Bahia", "category": "Casa", "description": "Eletrodomésticos e móveis", "usage": "Online", "icon": "🏠"},
    {"name": "Granado", "category": "Beleza", "description": "Cosméticos e perfumaria", "usage": "Loja Física e Online", "icon": "💄"},
    {"name": "Eudora", "category": "Beleza", "description": "Cosméticos e perfumes", "usage": "Online", "icon": "💄"},
    {"name": "Chilli Beans", "category": "Acessórios", "description": "Óculos e acessórios", "usage": "Online", "icon": "🕶️"},
    {"name": "Netshoes", "category": "Calçados", "description": "Calçados e artigos esportivos", "usage": "Online", "icon": "👟"},
    {"name": "Estrela", "category": "Brinquedos", "description": "Brinquedos e jogos", "usage": "Online", "icon": "🧸"},
    {"name": "Imaginarium", "category": "Brinquedos", "description": "Brinquedos educativos", "usage": "Online", "icon": "🎓"},
    {"name": "Monte Carlo", "category": "Doces", "description": "Biscoitos e doces", "usage": "Online", "icon": "🍪"},
    {"name": "Besni", "category": "Doces", "description": "Doces árabes", "usage": "Loja Física", "icon": "🧁"},
    {"name": "Aussie", "category": "Gastronomia", "description": "Restaurante australiano", "usage": "Loja Física", "icon": "🇦🇺"},
    {"name": "PetLove", "category": "Pets", "description": "Produtos para pets", "usage": "Online", "icon": "🐕"},
    {"name": "ZZ MALL", "category": "Shopping", "description": "Shopping online", "usage": "Online", "icon": "🛒"},
    {"name": "Santa Luzia", "category": "Varejo", "description": "Produtos diversos", "usage": "Loja Física e Online", "icon": "🛍️"},
    {"name": "Lojas MM", "category": "Varejo", "description": "Moda e acessórios", "usage": "Online", "icon": "👗"},
    {"name": "Tip Top", "category": "Padaria", "description": "Padaria e confeitaria", "usage": "Loja Física", "icon": "🥖"},
    {"name": "Dufry", "category": "Viagem", "description": "Duty free shops", "usage": "Loja Física", "icon": "✈️"},
    {"name": "Airbnb", "category": "Viagem", "description": "Hospedagem alternativa", "usage": "Online", "icon": "🏨"},
    {"name": "GNC Cinemas", "category": "Entertainment", "description": "Rede de cinemas", "usage": "Loja Física", "icon": "🎬"},
    {"name": "Spotify", "category": "Música", "description": "Streaming de música digital", "usage": "Online", "icon": "🎵"},
    {"name": "Uber", "category": "Transporte", "description": "Transporte e delivery", "usage": "Online", "icon": "🚗"},
    {"name": "XBox Live Credits", "category": "Gaming", "description": "Créditos para Xbox Live", "usage": "Online", "icon": "🎮"},
    {"name": "Nintendo", "category": "Gaming", "description": "Jogos e créditos Nintendo", "usage": "Online", "icon": "🎮"},
    {"name": "Pokemon", "category": "Gaming", "description": "Jogos Pokemon", "usage": "Online", "icon": "⚡"},
    {"name": "Xbox Game Pass", "category": "Gaming", "description": "Assinatura de jogos Xbox", "usage": "Online", "icon": "🎮"},
    {"name": "PlayStation", "category": "Gaming", "description": "Créditos PlayStation", "usage": "Online", "icon": "🎮"},
    {"name": "Minecraft", "category": "Gaming", "description": "Jogo Minecraft", "usage": "Online", "icon": "⛏️"},
    {"name": "Roblox", "category": "Gaming", "description": "Plataforma de jogos Roblox", "usage": "Online", "icon": "🎮"},
    {"name": "Google Play", "category": "Gaming", "description": "Créditos Google Play", "usage": "Online", "icon": "📱"},
    {"name": "EA Sports FC 25", "category": "Gaming", "description": "Jogo de futebol EA", "usage": "Online", "icon": "⚽"},
    {"name": "Avatim", "category": "Moda", "description": "Moda masculina", "usage": "Loja Física e Online", "icon": "👔"},
    {"name": "Nissei", "category": "Moda", "description": "Moda oriental", "usage": "Loja Física e Online", "icon": "👘"},
    {"name": "Bagaggio", "category": "Acessórios", "description": "Bolsas e acessórios", "usage": "Online", "icon": "👜"},
    {"name": "Technos", "category": "Relógios", "description": "Relógios e acessórios", "usage": "Online", "icon": "⌚"},
    {"name": "Euro Relógios", "category": "Relógios", "description": "Relógios premium", "usage": "Online", "icon": "⌚"},
    {"name": "Fossil", "category": "Relógios", "description": "Relógios e acessórios", "usage": "Online", "icon": "⌚"},
    {"name": "Talchá", "category": "Bebidas", "description": "Chás e bebidas especiais", "usage": "Online", "icon": "🍵"},
    {"name": "Claro TV+", "category": "Streaming", "description": "Streaming de vídeo", "usage": "Online", "icon": "📺"},
    {"name": "Shopee", "category": "E-commerce", "description": "Marketplace online", "usage": "Online", "icon": "🛒"},
    {"name": "Pontofrio", "category": "E-commerce", "description": "Eletrodomésticos online", "usage": "Online", "icon": "🔌"},
    {"name": "Extra.com.br", "category": "E-commerce", "description": "Supermercado online", "usage": "Online", "icon": "🛒"},
    {"name": "Nosso Pay", "category": "Fintech", "description": "Soluções de pagamento", "usage": "Loja Física e Online", "icon": "💳"}
];

const faqData = [
    {
        "question": "O que é a Roleta da Sorte Dinerama?",
        "answer": "É uma promoção especial da Dinerama, onde você pode girar uma roleta virtual e concorrer a gift cards digitais de R$25, R$100 ou R$500."
    },
    {
        "question": "Quem pode participar?",
        "answer": "• Pessoas físicas com 18 anos ou mais.<br>• Residentes no Brasil.<br>• Todos usuários e usuárias com cadastro válido, ativo e que tenha saldo de pontos.<br>• Aceite os termos e condições da promoção."
    },
    {
        "question": "Como posso participar?",
        "answer": "• Complete as missões no app (elas rendem pontos).<br>• Troque seus pontos por chances de girar a roleta."
    },
    {
        "question": "Como acumular pontos?",
        "answer": "Você pode acumular pontos realizando as seguintes ações:<br>• Check-in diário: Faça login no app todos os dias. (100 pontos por check-in)<br>• Completar uma semana: Faça check-in diário durante uma semana inteira. (+1.200 pontos ao completar a semana)<br>• Completar um mês: Faça check-in diário durante um mês inteiro. (+4.100 pontos ao completar a semana)<br>• Enviar notas fiscais com o seu CPF para obter pontos (600 pontos por nota, respeitando o limite de 6 notas semanais)<br>• Missões: A Dinerama pode oferecer missões extras para acúmulo de pontos (ainda em definição)"
    },
    {
        "question": "Como funciona na prática?",
        "answer": "• Basta abrir o app, aceitar os termos da promoção e completar as missões disponíveis para acumular pontos.<br>• Troque os pontos pelas tentativas de giro da roleta."
    },
    {
        "question": "Quantos prêmios posso ganhar?",
        "answer": "Máximo de 1 prêmio por CPF por mês."
    },
    {
        "question": "Quais são os prêmios?",
        "answer": "• Gift Cards de R$25<br>• Gift Card de R$100<br>• Gift Card de R$500"
    },
    {
        "question": "Como recebo meu prêmio?",
        "answer": "• O gift card será enviado por e-mail em até 30 dias após a confirmação da sua contemplação.<br>• Junto com o gift card, você receberá instruções de uso.<br>• A Dinerama se reserva o direito de efetuar o cancelamento do prêmio caso constate a condição do solicitante, em infração à presente disposição, bem como de qualquer outra regra destes Termos de Uso."
    },
    {
        "question": "Posso trocar o gift card por dinheiro?",
        "answer": "Não. Ele não pode ser convertido em dinheiro, nem ter saque ou transferência."
    },
    {
        "question": "Por que posso ser desqualificado?",
        "answer": "• Não ter 18 anos.<br>• Não completar as missões no app.<br>• Não enviar documentos solicitados em caso de premiação<br>• Não seguir as regras e diretrizes dos termos de uso"
    },
    {
        "question": "Preciso de ajuda, como entro em contato?",
        "answer": "Envie e-mail para meajuda@dinerama.com.br"
    }
];

// Utility function for smooth scrolling
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Function to create gift card HTML
function createGiftCardHTML(giftCard, index) {
    const backgroundColors = [
        'var(--color-bg-1)', 'var(--color-bg-2)', 'var(--color-bg-3)', 
        'var(--color-bg-4)', 'var(--color-bg-5)', 'var(--color-bg-6)', 
        'var(--color-bg-7)', 'var(--color-bg-8)'
    ];
    
    const bgColor = backgroundColors[index % backgroundColors.length];
    
    return `
        <div class="gift-card">
            <div class="gift-card-header">
                <div class="gift-card-icon" style="background: ${bgColor};">
                    ${giftCard.icon}
                </div>
                <span class="gift-card-category">${giftCard.category}</span>
            </div>
            <h3 class="gift-card-title">${giftCard.name}</h3>
            <p class="gift-card-description">${giftCard.description}</p>
            <p class="gift-card-usage"><strong>Usar em:</strong> ${giftCard.usage}</p>
        </div>
    `;
}

// Function to create FAQ item HTML
function createFAQItemHTML(faqItem, index) {
    return `
        <div class="faq-item" data-index="${index}">
            <div class="faq-question" role="button" tabindex="0" aria-expanded="false" aria-controls="faq-answer-${index}">
                <span>${faqItem.question}</span>
                <span class="faq-icon">+</span>
            </div>
            <div class="faq-answer" id="faq-answer-${index}" role="region">
                <div class="faq-answer-content">${faqItem.answer}</div>
            </div>
        </div>
    `;
}

// Function to populate gift cards
function populateGiftCards() {
    const container = document.getElementById('gift-cards-container');
    if (container) {
        const giftCardsHTML = giftCardsData
            .map((giftCard, index) => createGiftCardHTML(giftCard, index))
            .join('');
        container.innerHTML = giftCardsHTML;
    }
}

// Function to toggle FAQ item
function toggleFAQItem(faqItem) {
    const isActive = faqItem.classList.contains('active');
    const question = faqItem.querySelector('.faq-question');
    const answer = faqItem.querySelector('.faq-answer');
    
    // Close all FAQ items first
    const allFaqItems = document.querySelectorAll('.faq-item');
    allFaqItems.forEach(item => {
        item.classList.remove('active');
        const itemQuestion = item.querySelector('.faq-question');
        const itemAnswer = item.querySelector('.faq-answer');
        if (itemQuestion) itemQuestion.setAttribute('aria-expanded', 'false');
        if (itemAnswer) itemAnswer.style.maxHeight = '0px';
    });
    
    // If the clicked item wasn't active, open it
    if (!isActive) {
        faqItem.classList.add('active');
        if (question) question.setAttribute('aria-expanded', 'true');
        if (answer) {
            // Calculate the actual height needed
            const content = answer.querySelector('.faq-answer-content');
            if (content) {
                answer.style.maxHeight = content.scrollHeight + 40 + 'px'; // Add padding
            }
        }
    }
}

// Function to populate FAQ
function populateFAQ() {
    const container = document.getElementById('faq-container');
    if (!container) return;
    
    const faqHTML = faqData
        .map((faqItem, index) => createFAQItemHTML(faqItem, index))
        .join('');
    container.innerHTML = faqHTML;
    
    // Add click event listeners to FAQ questions
    const faqItems = container.querySelectorAll('.faq-item');
    faqItems.forEach(faqItem => {
        const question = faqItem.querySelector('.faq-question');
        if (question) {
            // Handle click events - prevent event bubbling and default actions
            question.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                toggleFAQItem(faqItem);
            });
            
            // Handle keyboard events for accessibility
            question.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleFAQItem(faqItem);
                }
            });
        }
    });
}

// Initialize the application
function initializeApp() {
    // Populate content
    populateGiftCards();
    populateFAQ();
    
    // Add smooth scrolling to internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
    
    // Prevent any modal behaviors by removing existing modal handlers
    document.addEventListener('click', function(e) {
        // Prevent any modal behaviors on gift cards
        if (e.target.closest('.gift-card')) {
            e.preventDefault();
            e.stopPropagation();
        }
    });
}

// Run when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    
    // Add hover effects to gift cards with slight delay for staggered animation
    setTimeout(() => {
        const giftCards = document.querySelectorAll('.gift-card');
        giftCards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
            card.classList.add('fade-in');
        });
    }, 100);
    
    // Add intersection observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe sections for animation
    document.querySelectorAll('.gift-cards-section, .faq-section').forEach(section => {
        observer.observe(section);
    });
});

// Expose scrollToSection function globally
window.scrollToSection = scrollToSection;