 let currentIndex = 0;
        const slides = document.querySelectorAll('.slide');
        const totalSlides = slides.length;
        let slideInterval;

        function showSlide(index) {
            const slidesContainer = document.querySelector('.slides');
            slidesContainer.style.transform = 'translateX(' + (-index * 100) + '%)';
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % totalSlides;
            showSlide(currentIndex);
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            showSlide(currentIndex);
        }

        function resetInterval() {
            clearInterval(slideInterval);
            slideInterval = setInterval(nextSlide, 3000); // Автоматическое переключение каждые 3 секунды
        }

        document.getElementById('next').addEventListener('click', () => {
            nextSlide();
            resetInterval();
        });
        document.getElementById('prev').addEventListener('click', () => {
            prevSlide();
            resetInterval();
        });

        slideInterval = setInterval(nextSlide, 3000); // Автоматическое переключение каждые 3 секунды



    
    document.addEventListener('DOMContentLoaded', function() {
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
            rect.bottom >= 0
        );
    }
    
    function handleScroll() {
        const animatedElements = document.querySelectorAll(
            '.block_2, .block_3, ' +
            '.electro_in_maykop, .zagolovok, ' +
            '.preimushestvo, .spec li'
        );
        
        // Группируем элементы по строкам
        const rows = [];
        let currentRow = [];
        let prevTop = null;
        
        animatedElements.forEach((element, index) => {
            const rect = element.getBoundingClientRect();
            if (prevTop !== null && Math.abs(rect.top - prevTop) > 10) {
                rows.push(currentRow);
                currentRow = [];
            }
            currentRow.push(element);
            prevTop = rect.top;
        });
        
        if (currentRow.length > 0) {
            rows.push(currentRow);
        }
        
        // Анимируем каждую строку с задержкой между строками
        rows.forEach((row, rowIndex) => {
            row.forEach((element, elementIndex) => {
                if(isElementInViewport(element)) {
                    setTimeout(() => {
                        element.classList.add('show');
                    }, rowIndex * 20); // Задержка только между строками
                }
            });
        });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();
});