# 🎨 Custom Classes Quick Reference Guide

## 📦 Glassmorphism Classes

### Container Classes
```css
.glass-morphism
/* Main container with frosted glass effect */
Usage: <div className="glass-morphism">

.glass-sidebar
/* Sidebar specific glass with gradient */
Usage: <div className="glass-sidebar">

.glass-header
/* Header bar with glass effect */
Usage: <div className="glass-header">

.glass-footer
/* Footer bar with glass effect */
Usage: <div className="glass-footer">
```

### Card Classes
```css
.glass-card
/* Basic glass card - static */
Usage: <div className="glass-card">

.glass-card-hover
/* Glass card with hover effect */
Usage: <div className="glass-card-hover">

.glass-card-active
/* Glass card for active/selected state */
Usage: <div className="glass-card-active">

.profile-card
/* Special profile card with shine animation */
Usage: <div className="profile-card glass-card">
```

### Input Classes
```css
.glass-input
/* Transparent input field with glass effect */
Usage: <input className="glass-input" />
```

### Message Bubble Classes
```css
.glass-message-sent
/* Purple gradient bubble for sent messages */
Usage: <div className="glass-message-sent">

.glass-message-received
/* Gray bubble for received messages */
Usage: <div className="glass-message-received">
```

## 🎯 Button Classes

### Primary Buttons
```css
.btn-glass-purple
/* Main action button (purple gradient) */
Usage: <button className="btn-glass-purple">

.btn-glass-red
/* Danger/logout button (red gradient) */
Usage: <button className="btn-glass-red">

.btn-icon-glass
/* Icon-only button with glass effect */
Usage: <button className="btn-icon-glass">
```

### Combining with Other Classes
```jsx
// Button with hover lift
<button className="btn-glass-purple hover-lift">

// Icon button with group effect
<button className="btn-icon-glass hover-lift group">
  <i className="ri-icon group-hover:rotate-12"></i>
</button>
```

## ✨ Effect Classes

### Hover Effects
```css
.hover-lift
/* 3D lift effect on hover (-3px translate) */
Usage: <div className="hover-lift">

/* Results in:
   - translateY(-3px)
   - box-shadow increase
   - smooth 0.3s transition
*/
```

### Text Effects
```css
.gradient-text
/* Animated gradient text effect */
Usage: <h1 className="gradient-text">

/* Colors: Purple → Blue → Pink */
/* Animation: 3s infinite gradient shift */
```

## 🎬 Animation Classes

### Entrance Animations
```css
.animate-scale-in
/* Scale from 0.8 to 1.0 with fade */
Duration: 0.2s
Usage: <div className="animate-scale-in">

.animate-fade-in
/* Simple fade in from 0 to 1 */
Duration: 0.3s
Usage: <div className="animate-fade-in">
```

### Continuous Animations
```css
.animate-blob
/* Floating blob animation */
Duration: 7s infinite
Usage: <div className="animate-blob">

.animate-shine
/* Shine/shimmer effect */
Duration: 2s infinite
Usage: <div className="animate-shine">
```

### Animation Delays
```css
.animation-delay-2000
/* 2 second animation delay */
Usage: <div className="animate-blob animation-delay-2000">

.animation-delay-4000
/* 4 second animation delay */
Usage: <div className="animate-blob animation-delay-4000">
```

## 📜 Scrollbar Class

```css
.custom-scrollbar
/* Styled scrollbar with gradient thumb */
Usage: <div className="custom-scrollbar overflow-auto">

/* Features:
   - 6px width
   - Gradient purple to blue thumb
   - Transparent track
   - Smooth hover effect
*/
```

## 🎨 Usage Examples

### Example 1: User Card
```jsx
<div className="glass-card-hover hover-lift rounded-xl p-3 cursor-pointer">
  {/* Content */}
</div>
```

### Example 2: Active User Card
```jsx
<div className="glass-card-active border-l-4 border-purple-500 shadow-lg">
  {/* Selected user content */}
</div>
```

### Example 3: Search Input
```jsx
<input 
  className="glass-input rounded-xl border border-white/10 
             focus:border-purple-400/50 focus:ring-2 
             focus:ring-purple-400/20"
  placeholder="Search..."
/>
```

### Example 4: Send Button
```jsx
<button className="btn-glass-purple hover-lift group">
  <i className="ri-send-plane-fill 
                group-hover:translate-x-0.5 
                group-hover:-translate-y-0.5 
                transition-transform"></i>
</button>
```

### Example 5: Message Bubble
```jsx
<div className="glass-message-sent rounded-2xl p-3 shadow-lg 
                hover:shadow-xl transition-shadow">
  {message}
</div>
```

### Example 6: Profile Section
```jsx
<div className="profile-card glass-card p-4 rounded-2xl hover-lift">
  {/* Profile content */}
</div>
```

### Example 7: Icon Button with Hover
```jsx
<button className="btn-icon-glass hover-lift">
  <i className="ri-more-2-fill text-xl"></i>
</button>
```

## 🔧 Combining Classes

### Pattern 1: Card with Interaction
```jsx
className="glass-card-hover hover-lift rounded-xl p-3 
           cursor-pointer transition-all duration-300"
```

### Pattern 2: Active State
```jsx
className={`glass-card hover-lift 
           ${isActive ? 'glass-card-active border-purple-500' : ''}`}
```

### Pattern 3: Input with Icons
```jsx
<div className="relative group">
  <input className="glass-input rounded-xl w-full" />
  <i className="absolute right-4 top-1/2 -translate-y-1/2 
                group-focus-within:text-purple-400"></i>
</div>
```

### Pattern 4: Animated Button
```jsx
<button className="btn-glass-purple hover-lift group">
  <span className="flex items-center gap-2">
    <i className="ri-icon group-hover:rotate-12 transition-transform"></i>
    Text
  </span>
</button>
```

## 🎯 Best Practices

### ✅ DO:
```jsx
// Combine glass effect with Tailwind utilities
<div className="glass-card rounded-xl p-4 shadow-lg">

// Use hover-lift for interactive elements
<button className="btn-glass-purple hover-lift">

// Add group for parent-child hover effects
<div className="group">
  <i className="group-hover:rotate-12"></i>
</div>
```

### ❌ DON'T:
```jsx
// Don't mix conflicting glass classes
<div className="glass-card glass-morphism"> // ❌

// Don't forget transitions
<div className="hover-lift"> // ❌ Missing transition classes

// Better:
<div className="hover-lift transition-all duration-300"> // ✅
```

## 📱 Responsive Usage

```jsx
// Mobile-first approach
<div className="glass-card 
                p-3 sm:p-4 md:p-6 
                rounded-lg sm:rounded-xl md:rounded-2xl">
  {/* Content */}
</div>

// Conditional glass effect
<div className="glass-morphism 
                backdrop-blur-sm sm:backdrop-blur-md 
                lg:backdrop-blur-xl">
  {/* Content */}
</div>
```

## 🎨 Custom Combinations

### Floating Card
```jsx
<div className="glass-card hover-lift animate-blob 
                rounded-2xl p-6 shadow-2xl">
```

### Shimmering Button
```jsx
<button className="btn-glass-purple hover-lift relative overflow-hidden">
  <span className="relative z-10">Click Me</span>
  <div className="absolute inset-0 animate-shine"></div>
</button>
```

### Pulsing Status
```jsx
<div className="relative">
  <span className="absolute animate-ping bg-green-400 
                   rounded-full h-2 w-2"></span>
  <span className="relative bg-green-500 
                   rounded-full h-2 w-2"></span>
</div>
```

---

## 🎯 Quick Cheatsheet

| Effect | Class | Usage |
|--------|-------|-------|
| Glass Container | `.glass-morphism` | Main wrappers |
| Glass Card | `.glass-card` | Static cards |
| Hover Card | `.glass-card-hover` | Interactive cards |
| Active Card | `.glass-card-active` | Selected items |
| Input Field | `.glass-input` | Form inputs |
| Purple Button | `.btn-glass-purple` | Primary actions |
| Red Button | `.btn-glass-red` | Danger actions |
| Icon Button | `.btn-icon-glass` | Icon-only |
| Hover Lift | `.hover-lift` | Interactive elements |
| Gradient Text | `.gradient-text` | Animated text |
| Custom Scroll | `.custom-scrollbar` | Scroll containers |
| Blob Animation | `.animate-blob` | Floating orbs |
| Shine Effect | `.animate-shine` | Shimmer effect |

---

**Use these classes to maintain consistency across your app! 🎨✨**
