<?php
include 'script.php';
$products = getProducts();
?>

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Game Store</title>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Caveat&display=swap" rel="stylesheet">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <!-- Custom CSS -->
    <link rel="stylesheet" href="styles.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet">
</head>
<body>
    <!-- Header -->
    <header class="header">
        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-dark">
                <a class="navbar-brand d-flex align-items-center" href="index.html" style="text-decoration: none; color: inherit;">
                    <img src="./Пикчерс для сайта/image 2.png" alt="Logo" width="76" height="68" class="d-inline-block align-top">
                    <h2 style="margin-left: 10px;">Game Store</h2>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="catalog.php">
                                <i class="fas fa-th-large"></i> Каталог
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="support.html">
                                <i class="fas fa-headset"></i> Поддержка
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="shop_menu.html">
                                <i class="fas fa-shopping-cart"></i> Корзина
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <i class="fas fa-user"></i> Войти
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <i class="fas fa-globe"></i> RU
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>

    <!-- Main Content -->
    <main class="main-content">
        <div class="container">
            <div class="row">
                <!-- Filters -->
                <div class="col-md-3">
                    <div class="filters">
                        <h4>Сортировка</h4>
                        <div class="form-group">
                            <div class="search-bar">
                                <input type="text" id="search-input" class="form-control" placeholder="Поиск по товарам">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="priceRange">Цена, Р</label>
                            <div class="input-group">
                                <input type="number" class="form-control" id="minPrice" placeholder="Мин">
                                <input type="number" class="form-control" id="maxPrice" placeholder="Макс">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="categories">Категории товаров</label>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="shooter">
                                <label class="form-check-label" for="shooter">
                                    Шутер
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="horror">
                                <label class="form-check-label" for="horror">
                                    Хоррор
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="puzzle">
                                <label class="form-check-label" for="puzzle">
                                    Головоломки
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="strategy">
                                <label class="form-check-label" for="strategy">
                                    Стратегии
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="sport">
                                <label class="form-check-label" for="sport">
                                    Спорт
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Products -->
                <div class="col-md-9">
                    <div class="row" id="product-list">
                        <?php foreach ($products as $product): ?>
                            <div class="col-md-4 mb-4 product-item">
                                <a href="game.html" class="card-link" style="text-decoration: none; color: inherit;">
                                    <div class="card">
                                        <img src="<?php echo $product['image_url']; ?>" class="card-img-top" alt="<?php echo $product['name']; ?>">
                                        <div class="card-body">
                                            <h5 class="card-title"><?php echo $product['name']; ?></h5>
                                            <p class="card-text">Цена: <?php echo $product['price']; ?> Р</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        <?php endforeach; ?>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <p>Подпишитесь на нас в соцсетях!</p>
                </div>
                <div class="col-md-6 text-md-right">
                    <a href="https://t.me/Deniska_173" target="_blank" class="telegram-icon">
                        <i class="bi bi-telegram" style="font-size: 30px; color: #0088cc;"></i>
                    </a>
                </div>
            </div>
        </div>
    </footer>

    <!-- Bootstrap JS and dependencies -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="js/components/search.js"></script>
</body>
</html>