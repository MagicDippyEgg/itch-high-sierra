# itch for High Sierra

The goal of this project is to give you a desktop application that you can
download and run games from [itch.io](http://itch.io) with. Additionally you
should be able to update games and get notified when games are updated. The
goal is not to replace the itch.io website.

## Downloads

You can download it from the [releases page](https://github.com/MagicDippyEgg/itch-high-sierra/releases).

### itch (This Repository)

An Electron app with a multi-process architecture:

- **Main Process**: Handles state management (Redux), business logic, and coordination with butler/itch-setup. Uses a "reactor" pattern to handle side effects from Redux actions.
- **Renderer Process**: React-based UI with state synchronized from the main process via electron-redux.

## License

itch is released under the MIT License, see the [LICENSE][] file for details.

[LICENSE]: LICENSE

