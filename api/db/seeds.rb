# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all
Item.destroy_all

testUser1 = User.create!(name: "Sheila Jones", username: "test1", email: "test@test.com", photo_url: "http://www.fillmurray.com/200/200")

testItem1 = testUser1.items.create!(name: "bicycle", barcode: "3659878", photo_url: "www.google.com", status: "false")
