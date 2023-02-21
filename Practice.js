const express = require('express')

const app = express()

app.set('view engine', 'ejs')

app.use('/name', function(request, response){
    response.render('name', {
        lastname: 'Левин',
        firstname: 'Александр',
        fathername: 'Васильевич'
    })
})

app.use('/contacts', function(request, response){
    response.render('contacts', {
        contacts: 'Мои контакты',
        email: ['levalex200407@gmail.com'],
        phone: '+7 705 111 94 74',
    })
})

app.use('/info', function(request, response){
    response.render('info', {
     siam: 'Я выпускник второго курса ЦАТЭКа. Мне 18 лет. ',
     strong_sides1: 'Целеустремлённость',
     strong_sides2: 'Трудолюбие',
     strong_sides3: 'Знаю язык программирования C#',
     strong_sides4: 'Разбираюсь в современных массовой культуре',
     strong_sides5: 'Легко обучаемый',
     strong_sides6: 'Стрессоустойчивый',
     purpose:'Улучшить свои навыки программирования. Иметь стабильный доход. ',
     experience: 'Опыта работы нет. Но я очень сильно стремлюсь изучать новое и достигать новых свершений.',
    })
})

app.use('/skills', function(request, response){
    response.render('skills', {
        skills: 'Мои навыки:',
        skill1: 'Хорошее знание C#',
        skill2: 'Разбираюсь в технике',
        skill3: 'Знание нескольких языков, математики, истории, биологии',
        hobbies: 'Увлечения:',
        hobbie1: 'Видеоигры',
        hobbie2: 'Чтение книг',
        hobbie3: 'Комиксы',
 
    })
})

app.use('/languages', function(request, response){
    response.render('languages', {
        header: 'Языки',
        cat1: 'Языки которыми свободно владею:',
        cat2: 'Языки которые находятся в процессе изучения:',
        cat3: 'Языки которые хочу изучить в скором времени:',
        subcat1_1: 'Русский',
        subcat1_2: 'Английский',
        subcat2_1: 'Казахский',
        subcat2_2: 'Испанский',
        subcat3_1: 'Турецкий',
        subcat3_2: 'Итальянский',
        subcat3_3: 'Японсикий',
        subcat3_4: 'Арабский',
    })
})

app.use('/', function(request, response){
    response.render('main',{
    home: 'Главная',
    lastname: 'Левин',
    firstname: 'Александр',
    fathername: 'Васильевич',
    contacts: 'Мои контакты',
    email: ['levalex200407@gmail.com'],
    phone: '+7 705 111 94 74',
    siam: 'Я выпускник второго курса ЦАТЭКа. Мне 18 лет. ',
    strong_sides1: 'Целеустремлённость',
    strong_sides2: 'Трудолюбие',
    strong_sides3: 'Знаю язык программирования C#',
    strong_sides4: 'Разбираюсь в современных массовой культуре',
    strong_sides5: 'Легко обучаемый',
    strong_sides6: 'Стрессоустойчивый',
    purpose:'Улучшить свои навыки программирования. Иметь стабильный доход. ',
    experience: 'Опыта работы нет. Но я очень сильно стремлюсь изучать новое и достигать новых свершений.',
    skills: 'Мои навыки:',
    skill1: 'Хорошее знание C#',
    skill2: 'Разбираюсь в технике',
    skill3: 'Знание нескольких языков, математики, истории, биологии',
    hobbies: 'Увлечения:',
    hobbie1: 'Видеоигры',
    hobbie2: 'Чтение книг',
    hobbie3: 'Комиксы',
    header: 'Языки',
    cat1: 'Языки которыми свободно владею:',
    cat2: 'Языки которые находятся в процессе изучения:',
    cat3: 'Языки которые хочу изучить в скором времени:',
    subcat1_1: 'Русский',
    subcat1_2: 'Английский',
    subcat2_1: 'Казахский',
    subcat2_2: 'Испанский',
    subcat3_1: 'Турецкий',
    subcat3_2: 'Итальянский',
    subcat3_3: 'Японсикий',
    subcat3_4: 'Арабский',
    })
})

app.listen(6789)