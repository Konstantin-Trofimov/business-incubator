const path                   = require('path')
const miniCss                = require('mini-css-extract-plugin');
const HTMLWebpackPlugin      = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWabpackPlugin      = require('copy-webpack-plugin')
const MiniCssExtractPlugin   = require('mini-css-extract-plugin')
const CssMinimizerPlugin     = require('css-minimizer-webpack-plugin')



const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev
const PORT = 4200


class SucsessBuildNotification {
	constructor(title, indent) {
		this.msg = {}
		this.indent = indent
		this.msg.title = title.toUpperCase()
		this.makeSep = (gap, ext) => gap.repeat(ext)
		this.charsets = ['\u{00A0}', '\u{1F95A}', '\u{1F423}', '\u{1F425}']
	}
	get message() {
		const [space, ...emoji] = this.charsets
		const sep = this.makeSep(space, this.indent)
		const setSeps = str => sep + str + sep

		this.msg.left = setSeps(emoji.join(sep))
		this.msg.right = setSeps(emoji.reverse(sep).join(sep))

		this.msg.complitStr = function () {
			return `\n${this.left.concat(this.title, this.right)}\n`
		}
		return this.msg.complitStr()
	}
}

const startup = new SucsessBuildNotification('build is complited', 6)
process.on('exit', () => console.log(startup.message));
console.log('IS DEV:', isDev)


module.exports = {
	context: path.resolve(__dirname, 'src'),
	mode: 'development',
	entry: {
		main: '/js/index.js',
		analytics: '/js/analytics.js'
	},
	output: {
		filename: 'js/[name].[contenthash].js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '',
	},
	devtool: "eval-cheap-source-map",
	resolve: {
		extensions: ['.js', '.json', '.png'],
		alias: {
			'@models': path.resolve(__dirname, 'src/js/models'),
			'@': path.resolve(__dirname, 'src'),
		}
	},
	optimization: {
		splitChunks: {
			chunks: 'all'
		},
		minimizer: [
			new CssMinimizerPlugin(
				{
					minimizerOptions: {
					  preset: [
						"default",
						{
						  discardComments: { removeAll: true },
						},
					  ],
					},
				}
			),
		],
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'dist'),
		port: PORT
	},
	plugins: [
		new HTMLWebpackPlugin({
			title: 'Webpack',
			filename: './index.html',
			template: './index.html',
			minify: {
				collapseWhitespace: isProd
			},
			
		}),
		new CleanWebpackPlugin(),
		new CopyWabpackPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, 'src/assets'),
					to: path.resolve(__dirname, 'dist/assets')
				},

			]
		}),
		new MiniCssExtractPlugin({
			filename: isDev ? 'styles/[name].css' : 'styles/[name].[contenthash].css',
		}),
	
	],
	module: {
		rules: [
			{
				test:/\.(s*)css$/,
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
			},
			{
				test: /\.(png|jpg|svg|gif)$/,
				loader: 'file-loader',
				options: {
					name: '[path][name].[ext]',
				}
			},
			{
				test: /\.(ttf|woff|woff2|eot)$/,
				loader: 'file-loader',
				options: {
					name: '[path][name].[ext]',
				}
			},
			{
				test: /\.xml$/,
				use: ['xml-loader']
			},
			{
				test: /\.csv$/,
				use: ['csv-loader']
			},
		
		]
	}
}

