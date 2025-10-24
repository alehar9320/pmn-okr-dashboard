# Theme System Guide

This project now uses a consistent dark mode theme by default, with easy support for light mode switching.

## Current Setup

### Default Theme

- **Dark mode** is now the default theme
- All components use CSS variables that automatically adapt to the theme
- The theme is applied at the root level using CSS custom properties

### Theme Provider

The app is wrapped with a `ThemeProvider` that manages theme state:

- Default theme: `dark`
- Storage key: `pmn-okr-theme`
- Supports: `dark`, `light`, and `system` themes

### Theme Toggle

A theme toggle button is available in the site header that allows users to switch between dark and light modes.

## How It Works

### CSS Variables

The theme system uses CSS custom properties defined in `src/index.css`:

- `:root` contains the dark theme variables (default)
- `.light` class contains the light theme variables
- `.dark` class is kept for backward compatibility

### Tailwind Configuration

- `tailwind.config.js` is configured with `darkMode: 'class'`
- All color utilities use CSS variables for consistent theming
- Components automatically adapt to the current theme

### Component Usage

Components use semantic color classes that automatically adapt:

- `bg-background` - adapts to theme
- `text-foreground` - adapts to theme
- `border-border` - adapts to theme
- etc.

## Future Light Mode Support

To easily support light mode in the future:

1. **Theme Toggle**: The toggle button is already implemented and functional
2. **CSS Variables**: Light theme variables are already defined in `.light` class
3. **Component Classes**: All components use semantic classes that work with both themes
4. **Theme Provider**: The provider supports theme switching with persistence

### Adding Light Mode Support

When you want to enable light mode support:

1. The theme toggle is already functional
2. Users can switch between dark and light modes
3. Theme preference is saved in localStorage
4. All components will automatically adapt

### Customization

To customize colors:

1. Update CSS variables in `src/index.css`
2. Modify the `:root` (dark theme) and `.light` (light theme) sections
3. All components will automatically use the new colors

## Files Modified

- `src/index.css` - Updated CSS variables for dark theme default
- `src/App.tsx` - Added ThemeProvider wrapper
- `src/components/theme-provider.tsx` - New theme management component
- `src/components/theme-toggle.tsx` - New theme toggle component
- `src/components/site-header.tsx` - Added theme toggle button
- `tailwind.config.js` - New Tailwind configuration for dark mode
