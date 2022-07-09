# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Like.destroy_all
Actor.destroy_all
Movie.destroy_all
Director.destroy_all

d1 = Director.create(name:"Joss Whedon", age:58)
d2 = Director.create(name:"Christopher Nolan", age:51)
d3 = Director.create(name:"Shawn Levy", age:53)
d4 = Director.create(name:"Jon Favreau", age:55)

m1 = d1.movies.create(title:"The Avengers", year:2012, length:143, rating:"8.0/10", mpa:"PG-13", studio:"Marvel Studios", budget:220000000, poster:"https://variety.com/wp-content/uploads/2014/04/01-avengers-2012.jpg")
m2 = d1.movies.create(title:"Serenity", year:2005, length:119, rating:"7.8/10", mpa:"PG-13", studio:"Universal Studios", budget:39000000, poster:"https://m.media-amazon.com/images/I/61L23t8noEL._AC_SL1334_.jpg")
m3 = d1.movies.create(title:"Avengers: Age of Ultron", year:2015, length:141, rating:"7.3/10", mpa:"PG-13", studio:"Marvel Studios", budget:365000000, poster:"https://www.budgetsavvydiva.com/wp-content/uploads/2015/04/avengers_age_of_ultron_ver12_xlg1.jpg")

m4 = d2.movies.create(title:"Inception", year:2010, length:148, rating:"8.8/10", mpa:"PG-13", studio:"Warner Bros.", budget:160000000, poster:"https://static.wikia.nocookie.net/chrisnolan/images/9/91/Inception_poster.jpg/revision/latest?cb=20200702044303")
m5 = d2.movies.create(title:"The Dark Knight", year:2008, length:152, rating:"8.4/10", mpa:"PG-13", studio:"Warner Bros.", budget:185000000, poster:"https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg")
m6 = d2.movies.create(title:"Interstellar", year:2014, length:169, rating:"8.6/10", mpa:"PG-13", studio:"Warner Bros.", budget:165000000, poster:"https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg")

m7 = d3.movies.create(title:"Free Guy", year:2021, length:115, rating:"7.1/10", mpa:"PG-13", studio:"20th Century Studios", budget:125000000, poster:"https://m.media-amazon.com/images/I/8137Dl0ubpL._AC_SL1500_.jpg")
m8 = d3.movies.create(title:"Real Steel", year:2011, length:127, rating:"7.0/10", mpa:"PG-13", studio:"Dreamworks Pictures", budget:110000000, poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdfPZ3VbusH1U8IZMBiIhZa6yIBvtyErrMUcHv41oOfnpADPqO")
m9 = d4.movies.create(title:"The Adam Project", year:2022, length:106, rating:"6.7/10", mpa:"PG-13", studio:"Skydance Media", budget:116000000, poster:"https://www.themoviedb.org/t/p/w500/wFjboE0aFZNbVOF05fzrka9Fqyx.jpg")

m10 = d4.movies.create(title:"Iron Man", year:2008, length:126, rating:"7.9/10", mpa:"PG-13", studio:"Marvel Studios", budget:140000000, poster:"https://posterspy.com/wp-content/uploads/2021/03/Iron_Man-200th_Poster.jpg")
m11 = d4.movies.create(title:"Elf", year:2003, length:97, rating:"7.0/10", mpa:"PG", studio:"Universal Studios", budget:33000000, poster:"http://beartooththeatre.net/wp-content/uploads/elf-movie-poster.jpg")
m12 = d4.movies.create(title:"The Jungle Book", year:2016, length:111, rating:"7.4/10", mpa:"PG", studio:"Walt Disney Pictures", budget:175000000, poster:"https://lumiere-a.akamaihd.net/v1/images/p_thejunglebook2016_19751_6b8cfcec.jpeg?region=0%2C0%2C540%2C810")

5.times do
    name = Faker::Name.name
    age = Faker::Number.between(from: 10, to: 99)
    char_name = Faker::FunnyName.name
    m1.actors.create(name: name, age: age, char_name: char_name)
end
5.times do
    name = Faker::Name.name
    age = Faker::Number.between(from: 10, to: 99)
    char_name = Faker::FunnyName.name
    m2.actors.create(name: name, age: age, char_name: char_name)
end
5.times do
    name = Faker::Name.name
    age = Faker::Number.between(from: 10, to: 99)
    char_name = Faker::FunnyName.name
    m3.actors.create(name: name, age: age, char_name: char_name)
end
5.times do
    name = Faker::Name.name
    age = Faker::Number.between(from: 10, to: 99)
    char_name = Faker::FunnyName.name
    m4.actors.create(name: name, age: age, char_name: char_name)
end
5.times do
    name = Faker::Name.name
    age = Faker::Number.between(from: 10, to: 99)
    char_name = Faker::FunnyName.name
    m5.actors.create(name: name, age: age, char_name: char_name)
end
5.times do
    name = Faker::Name.name
    age = Faker::Number.between(from: 10, to: 99)
    char_name = Faker::FunnyName.name
    m6.actors.create(name: name, age: age, char_name: char_name)
end
5.times do
    name = Faker::Name.name
    age = Faker::Number.between(from: 10, to: 99)
    char_name = Faker::FunnyName.name
    m7.actors.create(name: name, age: age, char_name: char_name)
end
5.times do
    name = Faker::Name.name
    age = Faker::Number.between(from: 10, to: 99)
    char_name = Faker::FunnyName.name
    m8.actors.create(name: name, age: age, char_name: char_name)
end
5.times do
    name = Faker::Name.name
    age = Faker::Number.between(from: 10, to: 99)
    char_name = Faker::FunnyName.name
    m9.actors.create(name: name, age: age, char_name: char_name)
end
5.times do
    name = Faker::Name.name
    age = Faker::Number.between(from: 10, to: 99)
    char_name = Faker::FunnyName.name
    m10.actors.create(name: name, age: age, char_name: char_name)
end
5.times do
    name = Faker::Name.name
    age = Faker::Number.between(from: 10, to: 99)
    char_name = Faker::FunnyName.name
    m11.actors.create(name: name, age: age, char_name: char_name)
end
5.times do
    name = Faker::Name.name
    age = Faker::Number.between(from: 10, to: 99)
    char_name = Faker::FunnyName.name
    m12.actors.create(name: name, age: age, char_name: char_name)
end