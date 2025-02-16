# Design System for React Native

🚀 A reusable, customizable, and lightweight design system for React Native, providing UI components, theming support, and utility functions to accelerate app development.

## 📌 Features

- ✅ Prebuilt UI components (Buttons, Inputs, Cards, Modals, etc.)
- 🎨 Theming support (Light/Dark mode & custom themes)
- 🎭 Styled with `styled-components`
- ⚡ Optimized for performance and easy customization
- 🔥 Supports animations via `react-native-reanimated`
- 📱 Fully responsive and accessible

---

## 📦 Installation

```sh
npm install react-native-dynamic-design-system
# OR
yarn add react-native-dynamic-design-system

Peer Dependencies

Ensure you have the following installed in your project:
npm install react-native styled-components react-native-vector-icons react-native-reanimated

🚀 Usage

Wrap Your App with ThemeProvider
Before using components, wrap your app with the ThemeProvider to enable theming:

import React from 'react';
import { ThemeProvider, theme } from 'react-native-dynamic-design-system';
import App from './App';
const Root = () => (
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);

export default Root;

🛠 Components
🔘 Button
import { Button } from 'react-native-dynamic-design-system';
<Button title="Click Me" onPress={() => alert('Button Pressed')} />

📝 Text
import { Text } from 'react-native-dynamic-design-system';
<Text size="large">Hello, World!</Text>

📦 Card
import { Card, Text } from 'react-native-dynamic-design-system';
<Card>
  <Text>Card Content</Text>
</Card>

⌨️ Input
import { Input } from 'react-native-dynamic-design-system';
<Input placeholder="Enter text..." />

🎭 Modal
import { Modal, Button } from 'react-native-dynamic-design-system';
<Modal visible={isVisible} onClose={() => setIsVisible(false)}>
  <Text>This is a modal!</Text>
</Modal>

🔄 Loader
import { Loader } from 'react-native-dynamic-design-system';
<Loader size="large" color="blue" />

🎨 Theming
You can override the default theme by providing a custom theme to the ThemeProvider.
export const theme = {
  colors: {
    primary: '#6200ea',
    background: '#ffffff',
    text: '#000000',
    card: '#f5f5f5',
  },
  typography: {
    fontSizes: {
      small: 12,
      medium: 16,
      large: 20,
    },
  },
  spacing: {
    small: 8,
    medium: 16,
    large: 24,
  },
};

Custom Theme Example
import { ThemeProvider } from 'react-native-dynamic-design-system';
const customTheme = {
  colors: {
    primary: '#ff5722',
    background: '#333333',
    text: '#ffffff',
  },
};
<ThemeProvider theme={customTheme}>
  <App />
</ThemeProvider>;

🌟 Keywords
react-native
design-system
ui-kit
components
theming
styled-components
react-native-reanimated
react-native-vector-icons
animations
accessibility

💡 Contribution Guide
We welcome contributions to improve the design system! Follow these steps:

Fork the repository.
Create a new branch (feature/component-name).
Make your changes and commit (git commit -m "Added new component").
Push to your branch and create a Pull Request.

📜 License
This project is licensed under the MIT License.
```

## 💖 Support & Sponsorship
If you like this library and want to support its development, consider sponsoring me on [GitHub Sponsors](https://github.com/sponsors/Adarsh1322) 
