$(document).ready(function() {
    // Функция для получения данных и обновления страницы
    function fetchData() {
        $.ajax({
            url: 'script.php',
            method: 'GET',
            data: { action: 'getAllData' },
            success: function(response) {
                var data = JSON.parse(response);
                var dataContainer = $('#data-container');
                dataContainer.empty();

                $.each(data, function(tableName, tableData) {
                    var table = $('<table class="table table-bordered mt-3"></table>');
                    var thead = $('<thead></thead>');
                    var tbody = $('<tbody></tbody>');

                    // Создание заголовка таблицы
                    var headerRow = $('<tr></tr>');
                    if (tableData.length > 0) {
                        $.each(Object.keys(tableData[0]), function(index, key) {
                            headerRow.append('<th>' + key + '</th>');
                        });
                    }
                    thead.append(headerRow);
                    table.append(thead);

                    // Создание строк таблицы
                    $.each(tableData, function(index, row) {
                        var dataRow = $('<tr></tr>');
                        $.each(row, function(key, value) {
                            dataRow.append('<td>' + value + '</td>');
                        });
                        tbody.append(dataRow);
                    });
                    table.append(tbody);

                    dataContainer.append('<h3>' + tableName + '</h3>');
                    dataContainer.append(table);
                });
            },
            error: function(xhr, status, error) {
                console.error('Ошибка при получении данных:', error);
            }
        });
    }

    // Обновление данных при загрузке страницы
    fetchData();

    // Обновление данных по кнопке
    $('#refresh-data').click(function() {
        fetchData();
    });
});
