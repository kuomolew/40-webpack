let path = require('path'); //подключения модуля "path" для решения проблем с относительным путем output. Модуль подключаем отдельно через npm

let conf = {  //главный конфиг файл вебпака
    entry: './src/index.js',  //входная точка (стартовый js файл)
    output: { // путь сборки проекта
        path: path.resolve(__dirname, './dist'), //папка сборки, путь прописан с помощью модуля "path"
        filename: 'main.js', //имя файла в который вебпак соберет проект
        publicPath: 'dist/' // папка для сборки проекта webpack-dev-server"
    },
    devServer: {
        overlay: true, //ошибки с консоли от стартового файла будут показываться на страничке
    }, 
    module: { //подключаемые модули
        rules: [
            {
                test: /\.js$/, //регулярное выражение, которое выбирает все файлы с js в конце
                loader: 'babel-loader', //прогоняем их через этот модуль
                //exclude: '/node_modules/'
            },
            {
                test: /\.css$/, //регулярное выражение, которое выбирает все файлы с js в конце
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
};

module.exports = (env, options) => {
    let production = options.mode === 'production';

    conf.devtool = production
                    ? false
                    : 'eval-sourcemap'; //на продакшн сорсмап не попадает, зато будет в дев режиме. Если на проде нужна карта, то вместо false прописываем 'source-map'
    return conf;
} 