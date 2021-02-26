const { tailwindExtractor } = require("tailwindcss/lib/lib/purgeUnusedStyles");

module.exports = {
	purge: {
		content: [
			"./src/**/*.html",
			"./src/**/*.svelte",
		],
		options: {
			defaultExtractor: (content) => [
				// This is an internal Tailwind function that we're not supposed to be allowed to use
				// So if this stops working, please open an issue at
				// https://github.com/babichjacob/sapper-postcss-template/issues
				// rather than bothering Tailwind Labs about it
				...tailwindExtractor(content),
				// Match Svelte class: directives (https://github.com/tailwindlabs/tailwindcss/discussions/1731)
				...[...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(([_match, group, ..._rest]) => group),
			],
			keyframes: true,
		},
	},
	theme: {
		colors: {
            yellow: {
                dark: '#edb300',
                DEFAULT: '#ffc000'
            },
            grey: {
                dark: '#333333',
                DEFAULT: '#777',
                light: '#cdcdcd',
                lighter: '#f8f8f8'
            },
            white: {
                DEFAULT: '#fff'
            },
            black: {
                DEFAULT: '#000'
            },
            blue: {
                DEFAULT: '#5998C5'
            },
            red: {
                DEFAULT: '#E03616'
            },
            green: {
                dark: '#91C499',
                DEFAULT: '#CFFFB0'
            },
            purple: {
                DEFAULT: '#7E2E84'
            },
            error: {
                DEFAULT: '#ff0033' 
            }
        },
        fontFamily: {
            'sans' : ['calibri', 'sans-serif'],
            'nixie': ['Nixie', 'serif'],
            'sarpanch': ['Sarpanch', 'sans-serif']
        },
        extend: {
            backgroundImage: theme => ({
                'kids-image-sm': "url('/images/kids-sm.jpg')",
                'kids-image-md': "url('/images/kids-md.jpg')",
                'kids-image-lg': "url('/images/kids-lg.jpg')",
                'werkwijze-image-sm': "url('/images/werkwijze-sm.jpg')",
                'werkwijze-image-md': "url('/images/werkwijze-md.jpg')",
                'werkwijze-image-lg': "url('/images/werkwijze-lg.jpg')",
                'blog-image-sm': "url('/images/blog-sm.jpg')",
                'blog-image-md': "url('/images/blog-md.jpg')",
                'blog-image-lg': "url('/images/blog-lg.jpg')",
                'login-image': "url('/images/login.jpg')",
                'doelgroep06-image-sm': "url('/images/toddler-sm.jpg')",
                'doelgroep06-image-md': "url('/images/toddler-md.jpg')",
                'doelgroep06-image-lg': "url('/images/toddler-lg.jpg')",
                'doelgroep612-image-sm': "url('/images/child-sm.jpg')",
                'doelgroep612-image-md': "url('/images/child-md.jpg')",
                'doelgroep612-image-lg': "url('/images/child-lg.jpg')",
                'doelgroep1216-image-sm': "url('/images/teen.jpg')",
                'iqtest-image-sm': "url('/images/iqtest-sm.jpg')",
                'iqtest-image-md': "url('/images/iqtest-md.jpg')",
                'iqtest-image-lg': "url('/images/iqtest-lg.jpg')",
                'mutisme-image-sm': "url('/images/mutisme-sm.jpg')",
                'mutisme-image-md': "url('/images/mutisme-md.jpg')",
                'mutisme-image-lg': "url('/images/mutisme-lg.jpg')",
                'angst-image-sm': "url('/images/angst-sm.jpg')",
                'angst-image-md': "url('/images/angst-md.jpg')",
                'angst-image-lg': "url('/images/angst-lg.jpg')",

            })
        }
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
