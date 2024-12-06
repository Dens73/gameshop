$(document).ready(function() {
    // Найти форму обратной связи
    const feedbackForm = $('#feedback-form');
    localCart = localStorage.getItem("cart");
    if (localCart !== null) {
        cart = JSON.parse(localCart);
    }
    if (window.location.href.includes("shop_menu")){
        updateCart();
    }

    feedbackForm.on('submit', function(event) {
        event.preventDefault(); // Отключить переход на другую страницу

        // Получить данные из формы
        const name = $('#name').val();
        const email = $('#email').val();
        const phone = $('#phone').val();
        const message = $('#message').val();

        // Проверка данных
        let isValid = true;
        let errorMessage = '';

        if (!name) {
            isValid = false;
            errorMessage += 'Пожалуйста, введите ваше имя.<br>';
        }

        if (!email || !validateEmail(email)) {
            isValid = false;
            errorMessage += 'Пожалуйста, введите корректный адрес электронной почты.<br>';
        }

        if (!phone || !validatePhone(phone)) {
            isValid = false;
            errorMessage += 'Пожалуйста, введите корректный номер телефона.<br>';
        }

        if (!message) {
            isValid = false;
            errorMessage += 'Пожалуйста, введите ваше сообщение.<br>';
        }

        if (isValid) {
            $.ajax({
                url: 'script.php',
                type: 'POST',
                data: {
                    name: name,
                    email: email,
                    phone: phone,
                    message: message
                },
                success: function(response) {
                    document.getElementById('modal-message').innerText = 'Ваши данные успешно отправлены!';
                    $('#feedback-modal').modal('show');
                },
                error: function() {
                    document.getElementById('modal-message').innerText = 'Произошла ошибка при отправке данных.';
                    $('#feedback-modal').modal('show');
                }
            });
        } else {
            document.getElementById('modal-message').innerHTML = errorMessage;
            $('#feedback-modal').modal('show');
        }
    });

    // Функция для валидации email
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Функция для валидации номера телефона
    function validatePhone(phone) {
        const re = /^[0-9]{10,15}$/;
        return re.test(String(phone));
    }

    try {
        document.getElementById('checkout-button').addEventListener('click', function() {
            document.getElementById('payment-modal').style.display = 'block';
        });

        document.querySelector('.close-button').addEventListener('click', function() {
            document.getElementById('payment-modal').style.display = 'none';
        });

        window.addEventListener('click', function(event) {
            const modal = document.getElementById('payment-modal');
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        });

        document.getElementById('payment-form').addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Спасибо за покупку!');
            document.getElementById('payment-modal').style.display = 'none';
            cart = [];
            updateCart();
        });

        // Добавляем обработчик для кнопки закрытия модального окна
        document.getElementById('close-modal').addEventListener('click', function() {
            $('#feedback-modal').modal('hide');
        });

        // Закрытие модального окна при клике вне его области
        $('#feedback-modal').on('click', function(event) {
            if (event.target === this) {
                $('#feedback-modal').modal('hide');
            }
        });
    } catch {}
});
