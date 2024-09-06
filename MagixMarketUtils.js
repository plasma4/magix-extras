// By pelletsstarPL, and only to be used with the Market Mod by Bruno
G.AddData({
	name: 'Magix market mod utils',
	author: 'pelletsstarPL',
	desc: 'Utilities for Bruno Supremo\'s market mod.',
	engineVersion: 1,
	requires: ['Default dataset*', 'Market mod'],
	func: function () {
		G.getDict('market_sell').modes.coal.icon = G.getDict('market_buy').modes.coal.icon = G.getDict('bazaar_sell').modes.coal.icon = G.getDict('bazaar_buy').modes.coal.icon = G.getDict('trader_sell').modes.coal.icon = G.getDict('trader_buy').modes.coal.icon = [12, 8]
		G.getDict("market_coin").desc = "Market currency used to buy and sell other goods.//Used by [trader_icon]s, [bazaar_icon]s and [market_icon]s.//May also be stolen over time!"
		G.getDict("market_tech").desc = "@unlocks [trader_icon]s<>[population,Traders] are units that are able to buy or sell items."
		G.getDict("market_tech").icon = [0, 0, "market_images", 3, 22, "magixmod"]
		G.getDict("advanced catalog").icon = [0, 1, "market_images", 3, 22, "magixmod"]

		/////////////////////////////
		//SELL            MARKET   //
		/////////////////////////////
		G.getDict('market_sell').modes['magic essences'] = {
			name: 'Magic essences',
			icon: [20, 13, 'magixmod'],
			desc: 'Sell [magic essences,Essences] for [market_coin].',
			req: { 'Essence trading': true }
		};
		G.getDict('market_sell').effects.push({
			type: 'convert',
			from: {
				'magic essences': 1000,
			},
			into: {
				'market_coin': 20
			},
			every: 5,
			mode: 'magic essences'
		});
		G.getDict('market_sell').modes['le'] = {
			name: 'L.e.',
			icon: [0, 3, 'magixmod'],
			desc: 'Sell [lightning essence] for [market_coin].',
			req: { 'extended essences catalog': 'on' }
		};
		G.getDict('market_sell').effects.push({
			type: 'convert',
			from: {
				'lightning essence': 1000,
			},
			into: {
				'market_coin': 60
			},
			every: 5,
			mode: 'le'
		});
		G.getDict('market_sell').modes['fe'] = {
			name: 'F.e.',
			icon: [0, 2, 'magixmod'],
			desc: 'Sell [fire essence] for [market_coin].',
			req: { 'extended essences catalog': 'on' }
		};
		G.getDict('market_sell').effects.push({
			type: 'convert',
			from: {
				'fire essence': 1000,
			},
			into: {
				'market_coin': 60
			},
			every: 5,
			mode: 'fe'
		});
		G.getDict('market_sell').modes['we'] = {
			name: 'W.e.',
			icon: [0, 1, 'magixmod'],
			desc: 'Sell [water essence] for [market_coin].',
			req: { 'extended essences catalog': 'on' }
		};
		G.getDict('market_sell').effects.push({
			type: 'convert',
			from: {
				'water essence': 1000,
			},
			into: {
				'market_coin': 60
			},
			every: 5,
			mode: 'we'
		});
		G.getDict('market_sell').modes['de'] = {
			name: 'D.e.',
			icon: [1, 3, 'magixmod'],
			desc: 'Sell [dark essence] for [market_coin].',
			req: { 'extended essences catalog': 'on' }
		};
		G.getDict('market_sell').effects.push({
			type: 'convert',
			from: {
				'dark essence': 1000,
			},
			into: {
				'market_coin': 60
			},
			every: 5,
			mode: 'de'
		});
		G.getDict('market_sell').modes['wie'] = {
			name: 'Wi.e.',
			icon: [1, 1, 'magixmod'],
			desc: 'Sell [wind essence] for [market_coin].',
			req: { 'extended essences catalog': 'on' }
		};
		G.getDict('market_sell').effects.push({
			type: 'convert',
			from: {
				'wind essence': 1000,
			},
			into: {
				'market_coin': 60
			},
			every: 5,
			mode: 'wie'
		});
		G.getDict('market_sell').modes['ne'] = {
			name: 'N.e.',
			icon: [1, 2, 'magixmod'],
			desc: 'Sell [nature essence] for [market_coin].',
			req: { 'extended essences catalog': 'on' }
		};
		G.getDict('market_sell').effects.push({
			type: 'convert',
			from: {
				'nature essence': 1000,
			},
			into: {
				'market_coin': 60
			},
			every: 5,
			mode: 'ne'
		});
		G.getDict('market_sell').modes['he'] = {
			name: 'H.e.',
			icon: [20, 6, 'magixmod'],
			desc: 'Sell [holy essence] for [market_coin].',
			req: { 'extended essences catalog': 'on' }
		};
		G.getDict('market_sell').effects.push({
			type: 'convert',
			from: {
				'holy essence': 1000,
			},
			into: {
				'market_coin': 60
			},
			every: 5,
			mode: 'he'
		});
		G.getDict('market_sell').modes['othercutstone'] = {
			name: 'Various cut stone',
			icon: [2, 12, 'magixmod'],
			desc: 'Sell [Various cut stones] for [market_coin].',
			req: { 'extended basic catalog': 'on', 'Mo\' tradez': true }
		};
		G.getDict('market_sell').effects.push({
			type: 'convert',
			from: {
				'Various cut stones': 100,
			},
			into: {
				'market_coin': 75
			},
			every: 5,
			mode: 'othercutstone'
		});
		G.getDict('market_sell').modes['otherstone'] = {
			name: 'Various stones',
			icon: [3, 12, 'magixmod'],
			desc: 'Sell [Various stones] for [market_coin].',
			req: { 'extended archaic catalog': 'on', 'Mo\' tradez': true }
		};
		G.getDict('market_sell').effects.push({
			type: 'convert',
			from: {
				'Various stones': 100,
			},
			into: {
				'market_coin': 75
			},
			every: 5,
			mode: 'otherstone'
		});
		G.getDict('market_sell').modes['bamboo'] = {
			name: 'Bamboo',
			icon: [14, 4, 'magixmod'],
			desc: 'Sell [Bamboo] for [market_coin].',
			req: { 'extended archaic catalog': 'on', 'Mo\' tradez': true }
		};
		G.getDict('market_sell').effects.push({
			type: 'convert',
			from: {
				'Bamboo': 100,
			},
			into: {
				'market_coin': 50
			},
			every: 5,
			mode: 'bamboo'
		});
		G.getDict('market_sell').modes['platblock'] = {
			name: 'Platinum block',
			icon: [4, 11, 'magixmod'],
			desc: 'Sell [platinum block] for [market_coin].',
			req: { 'extended precious catalog': 'on', 'Mo\' tradez': true }
		};
		G.getDict('market_sell').effects.push({
			type: 'convert',
			from: {
				'platinum block': 100,
			},
			into: {
				'market_coin': 300
			},
			every: 5,
			mode: 'platblock'
		});
		G.getDict('market_sell').modes['sugarc'] = {
			name: 'Sugar cane',
			icon: [15, 4, 'magixmod'],
			desc: 'Sell [Sugar cane] for [market_coin].',
			req: { 'Mo\' tradez': true }
		};
		G.getDict('market_sell').effects.push({
			type: 'convert',
			from: {
				'Sugar cane': 100,
			},
			into: {
				'market_coin': 15
			},
			every: 1,
			mode: 'sugarc'
		});
		G.getDict('market_sell').modes['flower'] = {
			name: 'Flowers',
			icon: [11, 8, 'magixmod'],
			desc: 'Sell [flowers] for [market_coin].',
			req: { 'Mo\' tradez': true }
		};
		G.getDict('market_sell').effects.push({
			type: 'convert',
			from: {
				'flowers': 100,
			},
			into: {
				'market_coin': 5
			},
			every: 2,
			mode: 'flower'
		});
		G.getDict('market_sell').modes['wheat'] = {
			name: 'Wheat',
			icon: [23, 10, 'magixmod'],
			desc: 'Sell [wheat] for [market_coin].',
			req: { 'Mo\' tradez': true, 'Farm of wheat': true }
		};
		G.getDict('market_sell').effects.push({
			type: 'convert',
			from: {
				'wheat': 100,
			},
			into: {
				'market_coin': 8
			},
			every: 2,
			mode: 'wheat'
		});
		G.getDict('market_sell').modes['paper'] = {
			name: 'Paper',
			icon: [14, 12, 'magixmod'],
			desc: 'Sell [paper] for [market_coin].',
			req: { 'Mo\' tradez': true }
		};
		G.getDict('market_sell').effects.push({
			type: 'convert',
			from: {
				'paper': 100,
			},
			into: {
				'market_coin': 10
			},
			every: 2,
			mode: 'paper'
		});
		/////////////////////////////////////////////////////////
		//BUY                  MARKET                          //
		/////////////////////////////////////////////////////////
		G.getDict('market_buy').modes['magic essences'] = {
			name: 'Magic essences',
			icon: [20, 13, 'magixmod'],
			desc: 'Buy [magic essences,Essences] with [market_coin].',
			req: { 'Essence trading': true }
		};
		G.getDict('market_buy').effects.push({
			type: 'convert',
			from: {
				'market_coin': 100
			},
			into: {
				'magic essences': 500,
			},
			every: 5,
			mode: 'magic essences'
		});
		G.getDict('market_buy').modes['le'] = {
			name: 'L.e.',
			icon: [0, 3, 'magixmod'],
			desc: 'Buy [lightning essence] with [market_coin].',
			req: { 'extended essences catalog': 'on' }
		};
		G.getDict('market_buy').effects.push({
			type: 'convert',
			from: {
				'market_coin': 350
			},
			into: {
				'lightning essence': 100,
			},
			every: 5,
			mode: 'le'
		});
		G.getDict('market_buy').modes['fe'] = {
			name: 'F.e.',
			icon: [0, 2, 'magixmod'],
			desc: 'Buy [fire essence] with [market_coin].',
			req: { 'extended essences catalog': 'on' }
		};
		G.getDict('market_buy').effects.push({
			type: 'convert',
			from: {
				'market_coin': 350
			},
			into: {
				'fire essence': 100,
			},
			every: 5,
			mode: 'fe'
		});
		G.getDict('market_buy').modes['we'] = {
			name: 'W.e.',
			icon: [0, 1, 'magixmod'],
			desc: 'Buy [water essence] with [market_coin].',
			req: { 'extended essences catalog': 'on' }
		};
		G.getDict('market_buy').effects.push({
			type: 'convert',
			from: {
				'market_coin': 350
			},
			into: {
				'water essence': 100,
			},
			every: 5,
			mode: 'we'
		});
		G.getDict('market_buy').modes['de'] = {
			name: 'D.e.',
			icon: [1, 3, 'magixmod'],
			desc: 'Buy [dark essence] with [market_coin].',
			req: { 'extended essences catalog': 'on' }
		};
		G.getDict('market_buy').effects.push({
			type: 'convert',
			from: {
				'market_coin': 350
			},
			into: {
				'dark essence': 100,
			},
			every: 5,
			mode: 'de'
		});
		G.getDict('market_buy').modes['wie'] = {
			name: 'Wi.e.',
			icon: [1, 1, 'magixmod'],
			desc: 'Buy [wind essence] with [market_coin].',
			req: { 'extended essences catalog': 'on' }
		};
		G.getDict('market_buy').effects.push({
			type: 'convert',
			from: {
				'market_coin': 350
			},
			into: {
				'wind essence': 100,
			},
			every: 5,
			mode: 'wie'
		});
		G.getDict('market_buy').modes['ne'] = {
			name: 'N.e.',
			icon: [1, 2, 'magixmod'],
			desc: 'Buy [nature essence] with [market_coin].',
			req: { 'extended essences catalog': 'on' }
		};
		G.getDict('market_buy').effects.push({
			type: 'convert',
			from: {
				'market_coin': 350
			},
			into: {
				'nature essence': 100,
			},
			every: 5,
			mode: 'ne'
		});
		G.getDict('market_buy').modes['he'] = {
			name: 'H.e.',
			icon: [20, 6, 'magixmod'],
			desc: 'Buy [holy essence] with [market_coin].',
			req: { 'extended essences catalog': 'on' }
		};
		G.getDict('market_buy').effects.push({
			type: 'convert',
			from: {
				'market_coin': 350
			},
			into: {
				'holy essence': 100,
			},
			every: 5,
			mode: 'he'
		});
		G.getDict('market_buy').modes['othercutstone'] = {
			name: 'Various cut stone',
			icon: [2, 12, 'magixmod'],
			desc: 'Buy [Various cut stones] with [market_coin].',
			req: { 'extended basic catalog': 'on', 'Mo\' tradez': true }
		};
		G.getDict('market_buy').effects.push({
			type: 'convert',
			from: {
				'market_coin': 85

			},
			into: {
				'Various cut stones': 100,
			},
			every: 5,
			mode: 'othercutstone'
		});
		G.getDict('market_buy').modes['otherstone'] = {
			name: 'Various stones',
			icon: [3, 12, 'magixmod'],
			desc: 'Buy [Various stones] with [market_coin].',
			req: { 'extended archaic catalog': 'on', 'Mo\' tradez': true }
		};
		G.getDict('market_buy').effects.push({
			type: 'convert',
			from: {
				'market_coin': 20
			},
			into: {
				'Various stones': 100,
			},
			every: 5,
			mode: 'otherstone'
		});
		G.getDict('market_buy').modes['bamboo'] = {
			name: 'Bamboo',
			icon: [14, 4, 'magixmod'],
			desc: 'Buy [Bamboo] with [market_coin].',
			req: { 'extended archaic catalog': 'on', 'Mo\' tradez': true }
		};
		G.getDict('market_buy').effects.push({
			type: 'convert',
			from: {
				'market_coin': 15
			},
			into: {
				'Bamboo': 100,
			},
			every: 5,
			mode: 'bamboo'
		});
		G.getDict('market_buy').modes['platblock'] = {
			name: 'Platinum block',
			icon: [4, 11, 'magixmod'],
			desc: 'Buy [platinum block] with [market_coin].',
			req: { 'extended precious catalog': 'on', 'Mo\' tradez': true }
		};
		G.getDict('market_buy').effects.push({
			type: 'convert',
			from: {
				'market_coin': 400
			},
			into: {
				'platinum block': 100,
			},
			every: 5,
			mode: 'platblock'
		});
		G.getDict('market_buy').modes['sugarc'] = {
			name: 'Sugar cane',
			icon: [15, 4, 'magixmod'],
			desc: 'Buy [Sugar cane] with [market_coin].',
			req: { 'Mo\' tradez': true }
		};
		G.getDict('market_buy').effects.push({
			type: 'convert',
			from: {
				'market_coin': 8
			},
			into: {
				'Sugar cane': 100,
			},
			every: 1,
			mode: 'sugarc'
		});
		G.getDict('market_buy').modes['flower'] = {
			name: 'Flowers',
			icon: [11, 8, 'magixmod'],
			desc: 'Buy [flowers] with [market_coin].',
			req: { 'Mo\' tradez': true }
		};
		G.getDict('market_buy').effects.push({
			type: 'convert',
			from: {
				'market_coin': 5
			},
			into: {
				'flowers': 100,
			},
			every: 2,
			mode: 'flower'
		});
		G.getDict('market_buy').modes['wheat'] = {
			name: 'Wheat',
			icon: [23, 10, 'magixmod'],
			desc: 'Buy [wheat] with [market_coin].',
			req: { 'Mo\' tradez': true, 'Farm of wheat': true }
		};
		G.getDict('market_buy').effects.push({
			type: 'convert',
			from: {
				'market_coin': 8,
			},
			into: {
				'wheat': 100
			},
			every: 2,
			mode: 'wheat'
		});
		G.getDict('market_buy').modes['paper'] = {
			name: 'Paper',
			icon: [14, 12, 'magixmod'],
			desc: 'Buy [paper] with [market_coin].',
			req: { 'Mo\' tradez': true }
		};
		G.getDict('market_buy').effects.push({
			type: 'convert',
			from: {
				'market_coin': 10,
			},
			into: {
				'paper': 100
			},
			every: 2,
			mode: 'paper'
		});
		///////////////////////////////////////
		//SELL                   BAZAAR      //
		///////////////////////////////////////
		G.getDict('bazaar_sell').modes['magic essences'] = {
			name: 'Magic essences',
			icon: [20, 13, 'magixmod'],
			desc: 'Sell [magic essences,Essences] for [market_coin].',
			req: { 'Essence trading': true }
		};
		G.getDict('bazaar_sell').effects.push({
			type: 'convert',
			from: {
				'magic essences': 100,
			},
			into: {
				'market_coin': 2
			},
			every: 5,
			mode: 'magic essences'
		});
		G.getDict('bazaar_sell').modes['le'] = {
			name: 'L.e.',
			icon: [0, 3, 'magixmod'],
			desc: 'Sell [lightning essence] for [market_coin].',
			req: { 'extended essences catalog': 'on' }
		};
		G.getDict('bazaar_sell').effects.push({
			type: 'convert',
			from: {
				'lightning essence': 100,
			},
			into: {
				'market_coin': 6
			},
			every: 5,
			mode: 'le'
		});
		G.getDict('bazaar_sell').modes['fe'] = {
			name: 'F.e.',
			icon: [0, 2, 'magixmod'],
			desc: 'Sell [fire essence] for [market_coin].',
			req: { 'extended essences catalog': 'on' }
		};
		G.getDict('bazaar_sell').effects.push({
			type: 'convert',
			from: {
				'fire essence': 100,
			},
			into: {
				'market_coin': 6
			},
			every: 5,
			mode: 'fe'
		});
		G.getDict('bazaar_sell').modes['we'] = {
			name: 'W.e.',
			icon: [0, 1, 'magixmod'],
			desc: 'Sell [water essence] for [market_coin].',
			req: { 'extended essences catalog': 'on' }
		};
		G.getDict('bazaar_sell').effects.push({
			type: 'convert',
			from: {
				'water essence': 100,
			},
			into: {
				'market_coin': 6
			},
			every: 5,
			mode: 'we'
		});
		G.getDict('bazaar_sell').modes['de'] = {
			name: 'D.e.',
			icon: [1, 3, 'magixmod'],
			desc: 'Sell [dark essence] for [market_coin].',
			req: { 'extended essences catalog': 'on' }
		};
		G.getDict('bazaar_sell').effects.push({
			type: 'convert',
			from: {
				'dark essence': 100,
			},
			into: {
				'market_coin': 6
			},
			every: 5,
			mode: 'de'
		});
		G.getDict('bazaar_sell').modes['wie'] = {
			name: 'Wi.e.',
			icon: [1, 1, 'magixmod'],
			desc: 'Sell [wind essence] for [market_coin].',
			req: { 'extended essences catalog': 'on' }
		};
		G.getDict('bazaar_sell').effects.push({
			type: 'convert',
			from: {
				'wind essence': 100,
			},
			into: {
				'market_coin': 6
			},
			every: 5,
			mode: 'wie'
		});
		G.getDict('bazaar_sell').modes['ne'] = {
			name: 'N.e.',
			icon: [1, 2, 'magixmod'],
			desc: 'Sell [nature essence] for [market_coin].',
			req: { 'extended essences catalog': 'on' }
		};
		G.getDict('bazaar_sell').effects.push({
			type: 'convert',
			from: {
				'nature essence': 100,
			},
			into: {
				'market_coin': 6
			},
			every: 5,
			mode: 'ne'
		});
		G.getDict('bazaar_sell').modes['he'] = {
			name: 'H.e.',
			icon: [20, 6, 'magixmod'],
			desc: 'Sell [holy essence] for [market_coin].',
			req: { 'extended essences catalog': 'on' }
		};
		G.getDict('bazaar_sell').effects.push({
			type: 'convert',
			from: {
				'holy essence': 100,
			},
			into: {
				'market_coin': 6
			},
			every: 5,
			mode: 'he'
		});
		G.getDict('bazaar_sell').modes['othercutstone'] = {
			name: 'Various cut stone',
			icon: [2, 12, 'magixmod'],
			desc: 'Sell [Various cut stones] for [market_coin].',
			req: { 'extended basic catalog': 'on', 'Mo\' tradez': true }
		};
		G.getDict('bazaar_sell').effects.push({
			type: 'convert',
			from: {
				'Various cut stones': 10,
			},
			into: {
				'market_coin': 7.5
			},
			every: 5,
			mode: 'othercutstone'
		});
		G.getDict('bazaar_sell').modes['otherstone'] = {
			name: 'Various stones',
			icon: [3, 12, 'magixmod'],
			desc: 'Sell [Various stones] for [market_coin].',
			req: { 'extended archaic catalog': 'on', 'Mo\' tradez': true }
		};
		G.getDict('bazaar_sell').effects.push({
			type: 'convert',
			from: {
				'Various stones': 10,
			},
			into: {
				'market_coin': 1.5
			},
			every: 5,
			mode: 'otherstone'
		});
		G.getDict('bazaar_sell').modes['bamboo'] = {
			name: 'Bamboo',
			icon: [14, 4, 'magixmod'],
			desc: 'Sell [Bamboo] for [market_coin].',
			req: { 'extended archaic catalog': 'on', 'Mo\' tradez': true }
		};
		G.getDict('bazaar_sell').effects.push({
			type: 'convert',
			from: {
				'Bamboo': 10,
			},
			into: {
				'market_coin': 1.5
			},
			every: 5,
			mode: 'bamboo'
		});
		G.getDict('bazaar_sell').modes['platblock'] = {
			name: 'Platinum block',
			icon: [4, 11, 'magixmod'],
			desc: 'Sell [platinum block] for [market_coin].',
			req: { 'extended precious catalog': 'on', 'Mo\' tradez': true }
		};
		G.getDict('bazaar_sell').effects.push({
			type: 'convert',
			from: {
				'platinum block': 10,
			},
			into: {
				'market_coin': 30
			},
			every: 5,
			mode: 'platblock'
		});
		G.getDict('bazaar_sell').modes['sugarc'] = {
			name: 'Sugar cane',
			icon: [15, 4, 'magixmod'],
			desc: 'Sell [Sugar cane] for [market_coin].',
			req: { 'Mo\' tradez': true }
		};
		G.getDict('bazaar_sell').effects.push({
			type: 'convert',
			from: {
				'Sugar cane': 10,
			},
			into: {
				'market_coin': 0.8
			},
			every: 1,
			mode: 'sugarc'
		});
		G.getDict('bazaar_sell').modes['flower'] = {
			name: 'Flowers',
			icon: [11, 8, 'magixmod'],
			desc: 'Sell [flowers] for [market_coin].',
			req: { 'Mo\' tradez': true }
		};
		G.getDict('bazaar_sell').effects.push({
			type: 'convert',
			from: {
				'flowers': 100,
			},
			into: {
				'market_coin': 5
			},
			every: 2,
			mode: 'flower'
		});
		G.getDict('bazaar_sell').modes['wheat'] = {
			name: 'Wheat',
			icon: [23, 10, 'magixmod'],
			desc: 'Sell [wheat] for [market_coin].',
			req: { 'Mo\' tradez': true, 'Farm of wheat': true }
		};
		G.getDict('bazaar_sell').effects.push({
			type: 'convert',
			from: {
				'wheat': 10
			},
			into: {
				'market_coin': 0.8,
			},
			every: 2,
			mode: 'wheat'
		});
		G.getDict('bazaar_sell').modes['paper'] = {
			name: 'Paper',
			icon: [14, 12, 'magixmod'],
			desc: 'Sell [paper] for [market_coin].',
			req: { 'Mo\' tradez': true }
		};
		G.getDict('bazaar_sell').effects.push({
			type: 'convert',
			from: {
				'paper': 10
			},
			into: {
				'market_coin': 1,
			},
			every: 2,
			mode: 'paper'
		});
		/////////////////////////////////////////////////////////
		//BUY                               BAZAAR             //
		/////////////////////////////////////////////////////////
		G.getDict('bazaar_buy').modes['magic essences'] = {
			name: 'Magic essences',
			icon: [20, 13, 'magixmod'],
			desc: 'Buy [magic essences,Essences] with [market_coin].',
			req: { 'Essence trading': true }
		};
		G.getDict('bazaar_buy').effects.push({
			type: 'convert',
			from: {
				'market_coin': 10
			},
			into: {
				'magic essences': 50,
			},
			every: 5,
			mode: 'magic essences'
		});
		G.getDict('bazaar_buy').modes['le'] = {
			name: 'L.e.',
			icon: [0, 3, 'magixmod'],
			desc: 'Buy [lightning essence] with [market_coin].',
			req: { 'extended essences catalog': 'on' }
		};
		G.getDict('bazaar_buy').effects.push({
			type: 'convert',
			from: {
				'market_coin': 35
			},
			into: {
				'lightning essence': 10,
			},
			every: 5,
			mode: 'le'
		});
		G.getDict('bazaar_buy').modes['fe'] = {
			name: 'F.e.',
			icon: [0, 2, 'magixmod'],
			desc: 'Buy [fire essence] with [market_coin].',
			req: { 'extended essences catalog': 'on' }
		};
		G.getDict('bazaar_buy').effects.push({
			type: 'convert',
			from: {
				'market_coin': 35
			},
			into: {
				'fire essence': 10,
			},
			every: 5,
			mode: 'fe'
		});
		G.getDict('bazaar_buy').modes['we'] = {
			name: 'W.e.',
			icon: [0, 1, 'magixmod'],
			desc: 'Buy [water essence] with [market_coin].',
			req: { 'extended essences catalog': 'on' }
		};
		G.getDict('bazaar_buy').effects.push({
			type: 'convert',
			from: {
				'market_coin': 35
			},
			into: {
				'water essence': 10,
			},
			every: 5,
			mode: 'we'
		});
		G.getDict('bazaar_buy').modes['de'] = {
			name: 'D.e.',
			icon: [1, 3, 'magixmod'],
			desc: 'Buy [dark essence] with [market_coin].',
			req: { 'extended essences catalog': 'on' }
		};
		G.getDict('bazaar_buy').effects.push({
			type: 'convert',
			from: {
				'market_coin': 35
			},
			into: {
				'dark essence': 10,
			},
			every: 5,
			mode: 'de'
		});
		G.getDict('bazaar_buy').modes['wie'] = {
			name: 'Wi.e.',
			icon: [1, 1, 'magixmod'],
			desc: 'Buy [wind essence] with [market_coin].',
			req: { 'extended essences catalog': 'on' }
		};
		G.getDict('bazaar_buy').effects.push({
			type: 'convert',
			from: {
				'market_coin': 35
			},
			into: {
				'wind essence': 10,
			},
			every: 5,
			mode: 'wie'
		});
		G.getDict('bazaar_buy').modes['ne'] = {
			name: 'N.e.',
			icon: [1, 2, 'magixmod'],
			desc: 'Buy [nature essence] with [market_coin].',
			req: { 'extended essences catalog': 'on' }
		};
		G.getDict('bazaar_buy').effects.push({
			type: 'convert',
			from: {
				'market_coin': 35
			},
			into: {
				'nature essence': 10,
			},
			every: 5,
			mode: 'ne'
		});
		G.getDict('bazaar_buy').modes['he'] = {
			name: 'H.e.',
			icon: [20, 6, 'magixmod'],
			desc: 'Buy [holy essence] with [market_coin].',
			req: { 'extended essences catalog': 'on' }
		};
		G.getDict('bazaar_buy').effects.push({
			type: 'convert',
			from: {
				'market_coin': 35
			},
			into: {
				'holy essence': 10,
			},
			every: 5,
			mode: 'he'
		});
		G.getDict('bazaar_buy').modes['othercutstone'] = {
			name: 'Various cut stone',
			icon: [2, 12, 'magixmod'],
			desc: 'Buy [Various cut stones] with [market_coin].',
			req: { 'extended basic catalog': 'on', 'Mo\' tradez': true }
		};
		G.getDict('bazaar_buy').effects.push({
			type: 'convert',
			from: {
				'market_coin': 8

			},
			into: {
				'Various cut stones': 10,
			},
			every: 5,
			mode: 'othercutstone'
		});
		G.getDict('bazaar_buy').modes['otherstone'] = {
			name: 'Various stones',
			icon: [3, 12, 'magixmod'],
			desc: 'Buy [Various stones] with [market_coin].',
			req: { 'extended archaic catalog': 'on', 'Mo\' tradez': true }
		};
		G.getDict('bazaar_buy').effects.push({
			type: 'convert',
			from: {
				'market_coin': 8
			},
			into: {
				'Various stones': 10,
			},
			every: 5,
			mode: 'otherstone'
		});
		G.getDict('bazaar_buy').modes['bamboo'] = {
			name: 'Bamboo',
			icon: [14, 4, 'magixmod'],
			desc: 'Buy [Bamboo] with [market_coin].',
			req: { 'extended archaic catalog': 'on', 'Mo\' tradez': true }
		};
		G.getDict('bazaar_buy').effects.push({
			type: 'convert',
			from: {
				'market_coin': 1
			},
			into: {
				'Bamboo': 10,
			},
			every: 5,
			mode: 'bamboo'
		});
		G.getDict('bazaar_buy').modes['platblock'] = {
			name: 'Platinum block',
			icon: [4, 11, 'magixmod'],
			desc: 'Buy [platinum block] with [market_coin].',
			req: { 'extended precious catalog': 'on', 'Mo\' tradez': true }
		};
		G.getDict('bazaar_buy').effects.push({
			type: 'convert',
			from: {
				'market_coin': 40
			},
			into: {
				'platinum block': 10,
			},
			every: 5,
			mode: 'platblock'
		});
		G.getDict('bazaar_buy').modes['sugarc'] = {
			name: 'Sugar cane',
			icon: [15, 4, 'magixmod'],
			desc: 'Buy [Sugar cane] with [market_coin].',
			req: { 'Mo\' tradez': true }
		};
		G.getDict('bazaar_buy').effects.push({
			type: 'convert',
			from: {
				'market_coin': 8
			},
			into: {
				'Sugar cane': 10,
			},
			every: 1,
			mode: 'sugarc'
		});
		G.getDict('bazaar_buy').modes['flower'] = {
			name: 'Flowers',
			icon: [11, 8, 'magixmod'],
			desc: 'Buy [flowers] with [market_coin].',
			req: { 'Mo\' tradez': true }
		};
		G.getDict('bazaar_buy').effects.push({
			type: 'convert',
			from: {
				'market_coin': 5
			},
			into: {
				'flowers': 25,
			},
			every: 2,
			mode: 'flower'
		});
		G.getDict('bazaar_buy').modes['wheat'] = {
			name: 'Wheat',
			icon: [23, 10, 'magixmod'],
			desc: 'Buy [wheat] with [market_coin].',
			req: { 'Mo\' tradez': true, 'Farm of wheat': true }
		};
		G.getDict('bazaar_buy').effects.push({
			type: 'convert',
			from: {
				'market_coin': 0.8,
			},
			into: {
				'wheat': 10
			},
			every: 2,
			mode: 'wheat'
		});
		G.getDict('bazaar_buy').modes['paper'] = {
			name: 'Paper',
			icon: [14, 12, 'magixmod'],
			desc: 'Buy [paper] with [market_coin].',
			req: { 'Mo\' tradez': true }
		};
		G.getDict('bazaar_buy').effects.push({
			type: 'convert',
			from: {
				'market_coin': 1,
			},
			into: {
				'paper': 10
			},
			every: 2,
			mode: 'paper'
		});
		///////////////////////////////////////
		//SELL                         TRADER//
		///////////////////////////////////////
		G.getDict('trader_sell').modes['magic essences'] = {
			name: 'Magic essences',
			icon: [20, 13, 'magixmod'],
			desc: 'Sell [magic essences,Essences] for [market_coin].',
			req: { 'Essence trading': true }
		};
		G.getDict('trader_sell').effects.push({
			type: 'convert',
			from: {
				'magic essences': 10,
			},
			into: {
				'market_coin': 0.2
			},
			every: 5,
			mode: 'magic essences'
		});
		G.getDict('trader_sell').modes['le'] = {
			name: 'L.e.',
			icon: [0, 3, 'magixmod'],
			desc: 'Sell [lightning essence] for [market_coin].',
			req: { 'extended essences catalog': 'on' }
		};
		G.getDict('trader_sell').effects.push({
			type: 'convert',
			from: {
				'lightning essence': 10,
			},
			into: {
				'market_coin': 0.6
			},
			every: 5,
			mode: 'le'
		});
		G.getDict('trader_sell').modes['fe'] = {
			name: 'F.e.',
			icon: [0, 2, 'magixmod'],
			desc: 'Sell [fire essence] for [market_coin].',
			req: { 'extended essences catalog': 'on' }
		};
		G.getDict('trader_sell').effects.push({
			type: 'convert',
			from: {
				'fire essence': 10,
			},
			into: {
				'market_coin': 0.6
			},
			every: 5,
			mode: 'fe'
		});
		G.getDict('trader_sell').modes['we'] = {
			name: 'W.e.',
			icon: [0, 1, 'magixmod'],
			desc: 'Sell [water essence] for [market_coin].',
			req: { 'extended essences catalog': 'on' }
		};
		G.getDict('trader_sell').effects.push({
			type: 'convert',
			from: {
				'water essence': 10,
			},
			into: {
				'market_coin': 0.6
			},
			every: 5,
			mode: 'we'
		});
		G.getDict('trader_sell').modes['de'] = {
			name: 'D.e.',
			icon: [1, 3, 'magixmod'],
			desc: 'Sell [dark essence] for [market_coin].',
			req: { 'extended essences catalog': 'on' }
		};
		G.getDict('trader_sell').effects.push({
			type: 'convert',
			from: {
				'dark essence': 10,
			},
			into: {
				'market_coin': 0.6
			},
			every: 5,
			mode: 'de'
		});
		G.getDict('trader_sell').modes['wie'] = {
			name: 'Wi.e.',
			icon: [1, 1, 'magixmod'],
			desc: 'Sell [wind essence] for [market_coin].',
			req: { 'extended essences catalog': 'on' }
		};
		G.getDict('trader_sell').effects.push({
			type: 'convert',
			from: {
				'wind essence': 10,
			},
			into: {
				'market_coin': 0.6
			},
			every: 5,
			mode: 'wie'
		});
		G.getDict('trader_sell').modes['ne'] = {
			name: 'N.e.',
			icon: [1, 2, 'magixmod'],
			desc: 'Sell [nature essence] for [market_coin].',
			req: { 'extended essences catalog': 'on' }
		};
		G.getDict('trader_sell').effects.push({
			type: 'convert',
			from: {
				'nature essence': 10,
			},
			into: {
				'market_coin': 0.6
			},
			every: 5,
			mode: 'ne'
		});
		G.getDict('trader_sell').modes['he'] = {
			name: 'H.e.',
			icon: [20, 6, 'magixmod'],
			desc: 'Sell [holy essence] for [market_coin].',
			req: { 'extended essences catalog': 'on' }
		};
		G.getDict('trader_sell').effects.push({
			type: 'convert',
			from: {
				'holy essence': 10,
			},
			into: {
				'market_coin': 0.6
			},
			every: 5,
			mode: 'he'
		});
		G.getDict('trader_sell').modes['othercutstone'] = {
			name: 'Various cut stone',
			icon: [2, 12, 'magixmod'],
			desc: 'Sell [Various cut stones] for [market_coin].',
			req: { 'extended basic catalog': 'on', 'Mo\' tradez': true }
		};
		G.getDict('trader_sell').effects.push({
			type: 'convert',
			from: {
				'Various cut stones': 1,
			},
			into: {
				'market_coin': 0.75
			},
			every: 5,
			mode: 'othercutstone'
		});
		G.getDict('trader_sell').modes['otherstone'] = {
			name: 'Various stones',
			icon: [3, 12, 'magixmod'],
			desc: 'Sell [Various stones] for [market_coin].',
			req: { 'extended archaic catalog': 'on', 'Mo\' tradez': true }
		};
		G.getDict('trader_sell').effects.push({
			type: 'convert',
			from: {
				'Various stones': 1,
			},
			into: {
				'market_coin': 0.15
			},
			every: 5,
			mode: 'otherstone'
		});
		G.getDict('trader_sell').modes['bamboo'] = {
			name: 'Bamboo',
			icon: [14, 4, 'magixmod'],
			desc: 'Sell [Bamboo] for [market_coin].',
			req: { 'extended archaic catalog': 'on', 'Mo\' tradez': true }
		};
		G.getDict('trader_sell').effects.push({
			type: 'convert',
			from: {
				'Bamboo': 1,
			},
			into: {
				'market_coin': 0.15
			},
			every: 5,
			mode: 'bamboo'
		});
		G.getDict('trader_sell').modes['platblock'] = {
			name: 'Platinum block',
			icon: [4, 11, 'magixmod'],
			desc: 'Sell [platinum block] for [market_coin].',
			req: { 'extended precious catalog': 'on', 'Mo\' tradez': true }
		};
		G.getDict('trader_sell').effects.push({
			type: 'convert',
			from: {
				'platinum block': 1,
			},
			into: {
				'market_coin': 3
			},
			every: 5,
			mode: 'platblock'
		});
		G.getDict('trader_sell').modes['sugarc'] = {
			name: 'Sugar cane',
			icon: [15, 4, 'magixmod'],
			desc: 'Sell [Sugar cane] for [market_coin].',
			req: { 'Mo\' tradez': true }
		};
		G.getDict('trader_sell').effects.push({
			type: 'convert',
			from: {
				'Sugar cane': 1,
			},
			into: {
				'market_coin': 0.08
			},
			every: 1,
			mode: 'sugarc'
		});
		G.getDict('trader_sell').modes['flower'] = {
			name: 'Flowers',
			icon: [11, 8, 'magixmod'],
			desc: 'Sell [flowers] for [market_coin].',
			req: { 'Mo\' tradez': true }
		};
		G.getDict('trader_sell').effects.push({
			type: 'convert',
			from: {
				'flowers': 10,
			},
			into: {
				'market_coin': 0.5
			},
			every: 2,
			mode: 'flower'
		});
		G.getDict('trader_sell').modes['wheat'] = {
			name: 'Wheat',
			icon: [23, 10, 'magixmod'],
			desc: 'Sell [wheat] for [market_coin].',
			req: { 'Mo\' tradez': true, 'Farm of wheat': true }
		};
		G.getDict('trader_sell').effects.push({
			type: 'convert',
			from: {
				'wheat': 1
			},
			into: {
				'market_coin': 0.08
			},
			every: 2,
			mode: 'wheat'
		});
		G.getDict('trader_sell').modes['paper'] = {
			name: 'Paper',
			icon: [14, 12, 'magixmod'],
			desc: 'Sell [paper] for [market_coin].',
			req: { 'Mo\' tradez': true }
		};
		G.getDict('trader_sell').effects.push({
			type: 'convert',
			from: {
				'paper': 1
			},
			into: {
				'market_coin': 0.1
			},
			every: 2,
			mode: 'paper'
		});
		/////////////////////////////////////////////////////////
		//BUY                               TRADER             //
		/////////////////////////////////////////////////////////
		G.getDict('trader_buy').modes['magic essences'] = {
			name: 'Magic essences',
			icon: [20, 13, 'magixmod'],
			desc: 'Buy [magic essences,Essences] with [market_coin].',
			req: { 'Essence trading': true }
		};
		G.getDict('trader_buy').effects.push({
			type: 'convert',
			from: {
				'market_coin': 1
			},
			into: {
				'magic essences': 5,
			},
			every: 5,
			mode: 'magic essences'
		});
		G.getDict('trader_buy').modes['le'] = {
			name: 'L.e.',
			icon: [0, 3, 'magixmod'],
			desc: 'Buy [lightning essence] with [market_coin].',
			req: { 'extended essences catalog': 'on' }
		};
		G.getDict('trader_buy').effects.push({
			type: 'convert',
			from: {
				'market_coin': 3.5
			},
			into: {
				'lightning essence': 1,
			},
			every: 5,
			mode: 'le'
		});
		G.getDict('trader_buy').modes['fe'] = {
			name: 'F.e.',
			icon: [0, 2, 'magixmod'],
			desc: 'Buy [fire essence] with [market_coin].',
			req: { 'extended essences catalog': 'on' }
		};
		G.getDict('trader_buy').effects.push({
			type: 'convert',
			from: {
				'market_coin': 3.5
			},
			into: {
				'fire essence': 1,
			},
			every: 5,
			mode: 'fe'
		});
		G.getDict('trader_buy').modes['we'] = {
			name: 'W.e.',
			icon: [0, 1, 'magixmod'],
			desc: 'Buy [water essence] with [market_coin].',
			req: { 'extended essences catalog': 'on' }
		};
		G.getDict('trader_buy').effects.push({
			type: 'convert',
			from: {
				'market_coin': 3.5
			},
			into: {
				'water essence': 1,
			},
			every: 5,
			mode: 'we'
		});
		G.getDict('trader_buy').modes['de'] = {
			name: 'D.e.',
			icon: [1, 3, 'magixmod'],
			desc: 'Buy [dark essence] with [market_coin].',
			req: { 'extended essences catalog': 'on' }
		};
		G.getDict('trader_buy').effects.push({
			type: 'convert',
			from: {
				'market_coin': 3.5
			},
			into: {
				'dark essence': 1,
			},
			every: 5,
			mode: 'de'
		});
		G.getDict('trader_buy').modes['wie'] = {
			name: 'Wi.e.',
			icon: [1, 1, 'magixmod'],
			desc: 'Buy [wind essence] with [market_coin].',
			req: { 'extended essences catalog': 'on' }
		};
		G.getDict('trader_buy').effects.push({
			type: 'convert',
			from: {
				'market_coin': 3.5
			},
			into: {
				'wind essence': 1,
			},
			every: 5,
			mode: 'wie'
		});
		G.getDict('trader_buy').modes['ne'] = {
			name: 'N.e.',
			icon: [1, 2, 'magixmod'],
			desc: 'Buy [nature essence] with [market_coin].',
			req: { 'extended essences catalog': 'on' }
		};
		G.getDict('trader_buy').effects.push({
			type: 'convert',
			from: {
				'market_coin': 3.5
			},
			into: {
				'nature essence': 1,
			},
			every: 5,
			mode: 'ne'
		});
		G.getDict('trader_buy').modes['he'] = {
			name: 'H.e.',
			icon: [20, 6, 'magixmod'],
			desc: 'Buy [holy essence] with [market_coin].',
			req: { 'extended essences catalog': 'on' }
		};
		G.getDict('trader_buy').effects.push({
			type: 'convert',
			from: {
				'market_coin': 3.5
			},
			into: {
				'holy essence': 1,
			},
			every: 5,
			mode: 'he'
		});
		G.getDict('trader_buy').modes['othercutstone'] = {
			name: 'Various cut stone',
			icon: [2, 12, 'magixmod'],
			desc: 'Buy [Various cut stones] with [market_coin].',
			req: { 'extended basic catalog': 'on', 'Mo\' tradez': true }
		};
		G.getDict('trader_buy').effects.push({
			type: 'convert',
			from: {
				'market_coin': 0.8

			},
			into: {
				'Various cut stones': 1,
			},
			every: 5,
			mode: 'othercutstone'
		});
		G.getDict('trader_buy').modes['otherstone'] = {
			name: 'Various stones',
			icon: [3, 12, 'magixmod'],
			desc: 'Buy [Various stones] with [market_coin].',
			req: { 'extended archaic catalog': 'on', 'Mo\' tradez': true }
		};
		G.getDict('trader_buy').effects.push({
			type: 'convert',
			from: {
				'market_coin': 0.8
			},
			into: {
				'Various stones': 1,
			},
			every: 5,
			mode: 'otherstone'
		});
		G.getDict('trader_buy').modes['bamboo'] = {
			name: 'Bamboo',
			icon: [14, 4, 'magixmod'],
			desc: 'Buy [Bamboo] with [market_coin].',
			req: { 'extended archaic catalog': 'on', 'Mo\' tradez': true }
		};
		G.getDict('trader_buy').effects.push({
			type: 'convert',
			from: {
				'market_coin': 0.1
			},
			into: {
				'Bamboo': 1,
			},
			every: 5,
			mode: 'bamboo'
		});
		G.getDict('trader_buy').modes['platblock'] = {
			name: 'Platinum block',
			icon: [4, 11, 'magixmod'],
			desc: 'Buy [platinum block] with [market_coin].',
			req: { 'extended precious catalog': 'on', 'Mo\' tradez': true }
		};
		G.getDict('trader_buy').effects.push({
			type: 'convert',
			from: {
				'market_coin': 4
			},
			into: {
				'platinum block': 1,
			},
			every: 5,
			mode: 'platblock'
		});
		G.getDict('trader_buy').modes['sugarc'] = {
			name: 'Sugar cane',
			icon: [15, 4, 'magixmod'],
			desc: 'Buy [Sugar cane] with [market_coin].',
			req: { 'Mo\' tradez': true }
		};
		G.getDict('trader_buy').effects.push({
			type: 'convert',
			from: {
				'market_coin': 0.8
			},
			into: {
				'Sugar cane': 1,
			},
			every: 1,
			mode: 'sugarc'
		});
		G.getDict('trader_buy').modes['flower'] = {
			name: 'Flowers',
			icon: [11, 8, 'magixmod'],
			desc: 'Buy [flowers] with [market_coin].',
			req: { 'Mo\' tradez': true }
		};
		G.getDict('trader_buy').effects.push({
			type: 'convert',
			from: {
				'market_coin': 0.5
			},
			into: {
				'flowers': 3,
			},
			every: 2,
			mode: 'flower'
		});
		G.getDict('trader_buy').modes['wheat'] = {
			name: 'Wheat',
			icon: [23, 10, 'magixmod'],
			desc: 'Buy [wheat] with [market_coin].',
			req: { 'Mo\' tradez': true, 'Farm of wheat': true }
		};
		G.getDict('trader_buy').effects.push({
			type: 'convert',
			from: {
				'market_coin': 0.08,
			},
			into: {
				'wheat': 1
			},
			every: 2,
			mode: 'wheat'
		});
		G.getDict('trader_buy').modes['paper'] = {
			name: 'Paper',
			icon: [14, 12, 'magixmod'],
			desc: 'Buy [paper] for [market_coin].',
			req: { 'Mo\' tradez': true }
		};
		G.getDict('trader_buy').effects.push({
			type: 'convert',
			from: {
				'market_coin': 0.1,
			},
			into: {
				'paper': 1
			},
			every: 2,
			mode: 'paper'
		});
		new G.Unit({
			name: 'art seller',
			desc: '[art seller]s will be able to sell [painting]s for some [market_coin]. This unique seller can settle in some other worlds as well.',
			icon: [30, 26, 'magixmod'],
			cost: {},
			gizmos: true,
			modes: {
				'1': { name: 'Settle in the mortal world', icon: [14, 4], desc: 'Settles [art seller]s into the mortal world.', use: { 'worker': 1, 'land': 0.5 } },
				'2': { name: 'Settle within the Island', icon: [7, 0, 'magixmod'], desc: 'Settles [art seller]s into your second world.', use: { 'worker': 1, 'land of the Plain Island': 0.5 } },
				'3': { name: 'Settle at Paradise', icon: [20, 4, 'magixmod'], desc: 'Settles [art seller]s into the Paradise.', use: { 'worker': 1, 'Land of the Paradise': 0.5 } },
			},
			effects: [
				{ type: 'convert', from: { 'Painting': 2 }, into: { 'market_coin': 9 }, every: 11 },
			],
			req: { 'artistic thinking': true, 'Mo\' tradez': true },
			category: 'market_category',
		});
	}
});