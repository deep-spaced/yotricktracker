# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password')

# Get Tricky
Trick.create(
  title: "The Breakaway",
  url: "https://yoyotricks.com/yoyo-tricks/the-breakaway/154/",
  image_url: "https://yoyotricks.com/yo-yo/video_place/universal-jpg/New_Breakaway-320.jpg",
  description: "Basic side throw.",
  completed:  true,
  difficulty: 1
)
Trick.create(
  title: "Double Trapeze",
  url: "https://yoyotricks.com/yoyo-tricks/double-trapeze/187/",
  image_url: "https://yoyotricks.com/yo-yo/video_place/universal-jpg/Double_Trapeze-320.jpg",
  description: "It's like a trapeze, but doubled.",
  completed:  false,
  difficulty: 2
)
Trick.create(
  title: "Crazy 8",
  url: "https://yoyotricks.com/yoyo-tricks/crazy-8/38717/",
  image_url: "https://yoyotricks.com/yo-yo/video_place/universal-jpg/Crazy-8-320.jpg",
  description: "So as you can see this trick involves a weaving motion and there is actually a whole lot of tricks that involves a weaving motion and a lot of principles that we are going to teach you apply in pretty much the same way, so that was Revolutions which a lot of people struggle with.",
  completed:  false,
  difficulty: 2
)
Trick.create(
  title: "Houdini mount",
  url: "https://yoyotricks.com/yoyo-tricks/houdini-mount/1506/",
  image_url: "https://yoyotricks.com/yo-yo/video_place/universal-jpg/Houdini-Mount-320.jpg",
  description: "This trick is a whole lot like Double or Nothing, and the only real difference is that the first pass, normally with Double or Nothing you go around your finger, for the Houdini Mount you are just going to go around your thumb and then continue around and just do Double or Nothing like usual.",
  completed:  false,
  difficulty: 2
)
Trick.create(
  title: "Brent",
  url: "https://yoyotricks.com/yoyo-tricks/brent/42329/",
  image_url: "https://yoyotricks.com/yo-yo/video_place/universal-jpg/Brent-320.jpg",
  description: "So as you can see this trick can be a repeater and it is also good to add any combos and it is a slack trick so make sure your string tension is neutral.",
  completed:  false,
  difficulty: 2
)
Trick.create(
  title: "Kamikaze Mount",
  url: "https://yoyotricks.com/yoyo-tricks/kamikaze-mount/6424/",
  image_url: "https://yoyotricks.com/yo-yo/video_place/universal-jpg/Kamikaze-Mount-320.jpg",
  description: "This is a mount that leads into the trick Kamikaze, but we are going to show it to you in a separate video because it is actually a trick that leads into a whole bunch of other tricks as well, and I am going to show you one more advanced version in this video as well.",
  completed:  false,
  difficulty: 2
)
Trick.create(
  title: "Wrist Mount",
  url: "https://yoyotricks.com/yoyo-tricks/wrist-mount/6009/",
  image_url: "https://yoyotricks.com/yo-yo/video_place/universal-jpg/Wrist_Mount_Yoyo_Trick-320.jpg",
  description: "It's like a 1.5 mount but not.",
  completed:  false,
  difficulty: 2
)
