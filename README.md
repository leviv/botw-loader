# botw-loader
A clone of the Legend of Zelda, Breath of the Wild loading screen The original loading screen can be seen [here](https://www.youtube.com/watch?v=R138ePN3-9w), and the final version created by me can be seen [here](https://youtu.be/hzD3u5QuVoo).

The live version of the loader can be seen [here](https://leviv.github.io/botw-loader/). You can also view the Master Mode version of the site by adding `?mastermode=true` to the end of the URL like [this](https://leviv.github.io/botw-loader/?mastermode=true).

## Prerequisites
In order to compile the styles for this project, you need to have SASS installed.

To install SASS using npm
```bash
npm install -g sass
```

Install SASS using homebrew
```bash
brew install sass/sass/sass
```

## Getting started
To clone the repository to your local machine
```bash
git clone git@github.com:leviv/botw-loader.git
```
Then simply open `index.html` in your favorite web browser to get it up and running

## Development
To compile SASS changes to make them take effect
```bash
cd assets/css
sass --watch styles.sass:styles.css
```
