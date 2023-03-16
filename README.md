# Commit Size Validator | Extension

> WIP

The Commit Size Validator is a Google Chrome extension that helps validate the maximum size of characters allowed in a commit message within the GitHub or GitLab platform. This extension ensures that commit messages are within the specified size limit, which can improve code readability, collaboration, and overall quality.

The extension is easy to use and displays a notification if the commit message exceeds the specified size limit. The user can then modify the commit message to make it compliant with the size limit. The extension can be customized to suit individual needs, such as setting the maximum size limit or excluding certain files or directories from validation.

### Suport
- _Free and open-source browsers_:
  - Chromium
  - Brave
- _Proprietary browsers_:
  - Chrome
  - Edge
  - Vivaldi
  - Opera

## Installation

You can install the Commit Size Validator extension from the [Chrome Web Store](https://chrome.google.com/webstore/detail/commit-size-validator/nkpkolfophkaaoenpfldgbjgjmlbfmhf) or follow the instructions below to build and install the extension from source.

1. Clone this repository to your local machine.
2. Open Google Chrome and go to `chrome://extensions`.
3. Enable Developer mode in the top right corner.
4. Click "Load unpacked" and select the `src` directory of the cloned repository.

The extension is now installed and ready to use.

## Usage

Once the extension is installed, it will automatically check the commit message size when a commit is made in GitHub or GitLab. If the commit message exceeds the maximum size limit, the extension will display a notification with the option to modify the commit message.

To customize the extension, right-click on the extension icon in the toolbar and select "Options". Here, you can change the maximum size limit and add files or directories to exclude from validation.

## Contributing

This extension is open source, and contributions are welcome. If you have any feature requests, bug reports, or code contributions, please submit them to the [GitHub repository](https://github.com/username/repo-name). Please make sure to follow the code style and format guidelines outlined in the [CONTRIBUTING.md](CONTRIBUTING.md) file.

## License

This extension is licensed under the [MIT License](LICENSE).
