# 🎨 Aurora Text - Improved Version

## ✨ What Changed?

Đã cập nhật **AuroraText component** với nhiều cải tiến dựa trên best practices từ SeraUI:

### 🚀 New Features

1. **Customizable Colors** 
   - Có thể truyền array màu sắc tùy chỉnh
   - Default: `["#38BDF8", "#3B82F6", "#EC4899", "#38BDF8"]`
   
2. **Speed Control**
   - Control animation speed với prop `speed`
   - Default: `speed={1}` (10s)
   - Faster: `speed={2}` (5s)
   - Slower: `speed={0.5}` (20s)

3. **Better Gradient**
   - Gradient angle: **135deg** (diagonal, smoother flow)
   - Previous: 90deg (horizontal, less dynamic)

4. **Improved Animation**
   - Easing: **ease-in-out** (natural motion)
   - Previous: linear (mechanical)
   - Loop: 0% → 100% → 0% (seamless)

5. **Accessibility** ✅
   - Screen reader support với `sr-only` text
   - `prefers-reduced-motion` support
   - Proper ARIA attributes

6. **Performance** 🔥
   - React.memo optimization
   - Prevents unnecessary re-renders

## 📝 Usage

### Basic Usage (Default Colors)
```tsx
import { AuroraText } from "@/components/ui/AuroraText";

<h1>
  Về <AuroraText>WuSxo</AuroraText>
</h1>
```

### Custom Colors
```tsx
<AuroraText colors={["#FF0080", "#7928CA", "#0070F3", "#38bdf8"]}>
  Beautiful
</AuroraText>
```

### Custom Speed
```tsx
// Fast animation (5s)
<AuroraText speed={2}>
  Fast
</AuroraText>

// Slow animation (20s)  
<AuroraText speed={0.5}>
  Slow
</AuroraText>
```

### Combine Colors + Speed
```tsx
<AuroraText 
  colors={["#FF6B6B", "#FFD93D", "#6BCB77", "#4D96FF"]}
  speed={1.5}
>
  Rainbow
</AuroraText>
```

## 🎨 Color Schemes

### Default (Cyber Blue → Pink)
```tsx
colors={["#38BDF8", "#3B82F6", "#EC4899", "#38BDF8"]}
```

### Purple Dream
```tsx
colors={["#FF0080", "#7928CA", "#0070F3", "#38bdf8"]}
```

### Sunset
```tsx
colors={["#FF6B6B", "#FF8E53", "#FFA94D", "#FFD93D"]}
```

### Ocean
```tsx
colors={["#00D4FF", "#0099CC", "#006699", "#003366"]}
```

### Northern Lights (Green)
```tsx
colors={["#00FF87", "#60EFFF", "#00D2FF", "#00FFCC"]}
```

## 📊 Comparison

| Feature | Before | After |
|---------|--------|-------|
| Colors | Fixed (3 colors) | Customizable (any colors) |
| Speed | Fixed 3s | Adjustable (speed prop) |
| Gradient | 90deg (horizontal) | 135deg (diagonal) |
| Easing | linear | ease-in-out |
| Accessibility | ❌ | ✅ Screen reader + reduced motion |
| Performance | Normal | ✅ Optimized with memo |
| Customization | Low | High |

## 🎯 Technical Details

### Animation Keyframes
```css
@keyframes aurora {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
```

### Component Structure
```tsx
<span> {/* Wrapper */}
  <span className="sr-only">{children}</span> {/* For screen readers */}
  <span className="animate-aurora" style={gradientStyle}> {/* Visual */}
    {children}
  </span>
</span>
```

### Props Interface
```tsx
interface AuroraTextProps {
  children: React.ReactNode;
  className?: string;
  colors?: string[];  // NEW!
  speed?: number;     // NEW!
}
```

## 🎬 Live Demo

Visit: `http://localhost:3000/demo-effects.html`

Demo includes:
- ✅ Default color scheme
- ✅ Purple scheme variation  
- ✅ Fast speed demo
- ✅ Usage examples
- ✅ Multiple variations

## 📦 Files Modified

1. **`components/ui/AuroraText.tsx`**
   - Complete rewrite với memo, custom colors, speed
   - Added accessibility features
   
2. **`app/globals.css`**
   - Added new `aurora` keyframes
   - Added `prefers-reduced-motion` support
   
3. **`public/demo-effects.html`**
   - Updated với multiple examples
   - Added usage documentation

## 🎓 Best Practices Applied

1. ✅ **Component Memoization** - Prevents re-renders
2. ✅ **Accessibility First** - Screen readers + reduced motion
3. ✅ **Customization** - Flexible props for colors & speed
4. ✅ **Semantic HTML** - Proper ARIA attributes
5. ✅ **Performance** - CSS animations (GPU-accelerated)
6. ✅ **TypeScript** - Full type safety

## 💡 Pro Tips

### Creating Your Own Color Scheme
1. Choose 3-5 complementary colors
2. Add the first color at the end for seamless loop
3. Test with different speeds to find sweet spot

Example:
```tsx
// 4 unique colors + repeat first = 5 total
colors={["#FF0080", "#7928CA", "#0070F3", "#38bdf8", "#FF0080"]}
```

### Speed Guidelines
- **0.5-0.75**: Slow, elegant (20-13s)
- **1**: Standard (10s) - Default
- **1.5-2**: Fast, energetic (6-5s)
- **3+**: Very fast, hyperactive (3s)

### Performance Tips
- Use with large text (headings) for maximum impact
- Don't overuse - 1-2 aurora texts per page
- Consider reduced motion preferences

---

**Enjoy your enhanced Aurora Text effect!** 🌟✨

