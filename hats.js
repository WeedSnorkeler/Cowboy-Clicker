function useItem(item,target,invtitle,invmode){
	if(item.Use!=null&&typeof item.Use=="function"){
		item.Use()
	}
	if(item.Equippable==true){
		if(target.Equipped==null){
			target.Equipped = clone(item)
			if(item.num!=null){
				delete Game.Inventory[item.num]
				// refreshInventory()
				// inventoryGUI(true,invtitle,invmode,target)
				// inventoryGUI(false,invtitle,invmode,target)
			}
		}
		else{
			var teclone = clone(target.Equipped)
			var iclone = clone(item)
			Game.Inventory[item.num] = teclone
			target.Equipped = iclone
		}

	}
	refreshInventoryGui()
}

//Hat.Name + " | " + Hat.Description + " | (" + STATS + ")"

// Hats.HATNAME = []
// Hats.HATNAME.Name = "HATNAME"
// Hats.HATNAME.Description = "HATDESCRIPTION"
// Hats.HATNAME.Click = 0
// Hats.HATNAME.PerSecond = 0
// Hats.HATNAME.Attack = 0
// Hats.HATNAME.Health = 0
// Hats.HATNAME.Sprite = "SPRITE"
// Hats.HATNAME.Equippable = true/false
// Hats.HATNAME.Use = FUNCTION
// Hats.HATNAME.Price = PRICE

var Hats = []

Hats.CowboyHat = []
Hats.CowboyHat.Name = "Cowboy Hat"
Hats.CowboyHat.Description = "Yeeeeeeeeeeeeeeeeeeeeeeeeeeeeee haw."
Hats.CowboyHat.Click = 4
Hats.CowboyHat.PerSecond = 2
Hats.CowboyHat.Attack = 5
Hats.CowboyHat.Health = 10
Hats.CowboyHat.Sprite = "textures/CowboyHat.png"
Hats.CowboyHat.Equippable = true
Hats.CowboyHat.Price = 100

Hats.DiamondHelmet = []
Hats.DiamondHelmet.Name = "Diamond Helmet"
Hats.DiamondHelmet.Description = "Minecraft minecraft minecraft minecraft minecraft minecraft minecraft minecraft minecraft minecraft minecraft minecraft"
Hats.DiamondHelmet.Click = 7
Hats.DiamondHelmet.PerSecond = 4
Hats.DiamondHelmet.Attack = 3
Hats.DiamondHelmet.Health = 15
Hats.DiamondHelmet.Sprite = "textures/DiamondHelmet.png"
Hats.DiamondHelmet.Equippable = true
Hats.DiamondHelmet.Price = 500

Hats.MexicoHat = []
Hats.MexicoHat.Name = "Mexico Hat"
Hats.MexicoHat.Description = "Feminine, long haired men, are deliberatley growing their hair out so they can toss it over Trump's wall and Rapunzel illegals into our country."
Hats.MexicoHat.Click = 10
Hats.MexicoHat.PerSecond = 8
Hats.MexicoHat.Attack = 3
Hats.MexicoHat.Health = 15
Hats.MexicoHat.Sprite = "textures/MexicoHat.png"
Hats.MexicoHat.Equippable = true
Hats.MexicoHat.Price = 1000

Hats.ThighHat = []
Hats.ThighHat.Name = "Thigh Hat"
Hats.ThighHat.Description = "Some hot ass thighs hnggggggggggg"
Hats.ThighHat.Click = 20
Hats.ThighHat.PerSecond = 10
Hats.ThighHat.Attack = 3
Hats.ThighHat.Health = 15
Hats.ThighHat.Sprite = "textures/ThighHat.png"
Hats.ThighHat.Equippable = true
Hats.ThighHat.Price = 2500

Hats.AnimeThighs = []
Hats.AnimeThighs.Name = "Anime Thighs"
Hats.AnimeThighs.Description = "Oh FUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUCKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK"
Hats.AnimeThighs.Click = 30
Hats.AnimeThighs.PerSecond = 30
Hats.AnimeThighs.Attack = 3
Hats.AnimeThighs.Health = 15
Hats.AnimeThighs.Sprite = "textures/AnimeThighHat.png"
Hats.AnimeThighs.Equippable = true
Hats.AnimeThighs.Price = 5000

Hats.Sm4shFox = []
Hats.Sm4shFox.Name = "Sm4sh Fox Mccloud"
Hats.Sm4shFox.Description = ">:((( dont like"
Hats.Sm4shFox.Click = 40
Hats.Sm4shFox.PerSecond = 50
Hats.Sm4shFox.Attack = 3
Hats.Sm4shFox.Health = 15
Hats.Sm4shFox.Sprite = "textures/Sm4shFox.png"
Hats.Sm4shFox.Equippable = true
Hats.Sm4shFox.Price = 7500

Hats.MeleeFox = []
Hats.MeleeFox.Name = "Melee Fox Mccloud"
Hats.MeleeFox.Description = "down b jump down b jump down b jump down b jump down b jump down b jump down b jump down b jump down b jump down b jump down b jump down b jump down b jump down b jump down b jump down b jump down b jump down b jump down b jump down b jump down b jump down b jump down b jump down b jump down b jump down b jump down b jump down b jump down b jump down b jump down b jump down b jump down b jump down b jump down b jump down b jump down b jump down b jump down b jump down b jump down b jump down b jump down b jump down b jump down b jump down b jump down b jump down b jump down b jump down b jump down b jump down b jump down b jump down b jump down b jump down b jump down b jump down b jump down b jump down b jump down b jump down b jump down b jump"
Hats.MeleeFox.Click = 45
Hats.MeleeFox.PerSecond = 75
Hats.MeleeFox.Attack = 3
Hats.MeleeFox.Health = 15
Hats.MeleeFox.Sprite = "textures/MeleeFox.png"
Hats.MeleeFox.Equippable = true
Hats.MeleeFox.Price = 10000

Hats.SomeBlackDude = []
Hats.SomeBlackDude.Name = "Some Black Dude"
Hats.SomeBlackDude.Description = "idk i just found him"
Hats.SomeBlackDude.Click = 50
Hats.SomeBlackDude.PerSecond = 100
Hats.SomeBlackDude.Attack = 3
Hats.SomeBlackDude.Health = 15
Hats.SomeBlackDude.Sprite = "textures/SomeBlackDude.png"
Hats.SomeBlackDude.Equippable = true
Hats.SomeBlackDude.Price = 15000

Hats.RamRanch = []
Hats.RamRanch.Name = "Ram Ranch"
Hats.RamRanch.Description = "18 naked cowboys in the showers at Ram Ranch. Big hard throbbing cocks wanting to be sucked. 18 naked cowboys wanting to be fucked. Cowboys in the showers at Ram Ranch, on their knees, wanting to suck cowboy cocks. Ram Ranch really rocks. Hot hard buff cowboys their cocks throbbing hard, 18 more wild cowboys out in the yard. Big bulging cocks ever so hard. Orgy in the showers at ram ranch. Big hard throbbing cocks ramming cowboy butt. Like a breed of ram wanting to rut. Big hard throbbing cocks, getting sucked, real deep. Cowboys even getting fucked in their sleep. Ram ranch it rocks, cowboys love big hard throbbing cocks."
Hats.RamRanch.Click = 60
Hats.RamRanch.PerSecond = 125
Hats.RamRanch.Attack = 3
Hats.RamRanch.Health = 15
Hats.RamRanch.Sprite = "textures/RamRanchHat.png"
Hats.RamRanch.Equippable = true
Hats.RamRanch.Price = 20000

Hats.DoublePenetratorDildo = []
Hats.DoublePenetratorDildo.Name = "Double Penetrator Dildo"
Hats.DoublePenetratorDildo.Description = "two dicks at once"
Hats.DoublePenetratorDildo.Click = 100
Hats.DoublePenetratorDildo.PerSecond = 200
Hats.DoublePenetratorDildo.Attack = 3
Hats.DoublePenetratorDildo.Health = 15
Hats.DoublePenetratorDildo.Sprite = "textures/DoublePenetratorDildo.png"
Hats.DoublePenetratorDildo.Equippable = true
Hats.DoublePenetratorDildo.Price = 30000