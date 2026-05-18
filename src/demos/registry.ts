import type { ComponentType } from 'react'
import { Demo as Demo1 } from './demo-1/demo-1'
import demo1Tsx from './demo-1/demo-1.tsx?raw'
import demo1Css from './demo-1/demo-1.css?raw'
import { Demo as Demo2 } from './demo-2/demo-2'
import demo2Tsx from './demo-2/demo-2.tsx?raw'
import demo2Css from './demo-2/demo-2.css?raw'

export type DemoStatus = 'done' | 'current' | 'upcoming'

export type Demo = {
  id: string
  number: string
  name: string
  description: string
  status: DemoStatus
  folder: string
  goals?: string[]
  component?: ComponentType
  sources?: Record<string, string>
}

export const demos: Demo[] = [
  {
    id: 'demo-1',
    number: '01',
    name: 'demo-1',
    description: 'demo-1.tsx + demo-1.css',
    status: 'done',
    folder: 'demos/demo-1',
    component: Demo1,
    sources: {
      'demo-1.tsx': demo1Tsx,
      'demo-1.css': demo1Css,
    },
  },
  {
    id: 'demo-2',
    number: '02',
    name: 'demo-2',
    description: 'demo-2.tsx + demo-2.css',
    status: 'current',
    folder: 'demos/demo-2',
    component: Demo2,
    sources: {
      'demo-2.tsx': demo2Tsx,
      'demo-2.css': demo2Css,
    },
  },
  {
    id: 'transition-triad',
    number: '03',
    name: 'Property, duration, easing',
    description:
      'The three knobs you turn on every transition. Pick them on purpose.',
    status: 'upcoming',
    folder: 'demos/demo-3',
    goals: [
      'Animate multiple properties at once',
      'Pick a duration that matches the gesture (snappy vs. lazy)',
      'transition-property: all is a smell — be explicit',
    ],
  },
  {
    id: 'easing',
    number: '04',
    name: 'Easing curves',
    description:
      'Linear feels mechanical. Real motion accelerates and decelerates.',
    status: 'upcoming',
    folder: 'demos/demo-4',
    goals: [
      'ease-out for entering, ease-in for leaving',
      'cubic-bezier basics + when to reach for one',
      'A small bank of go-to curves (snappy, soft, overshoot)',
    ],
  },
  {
    id: 'transform',
    number: '05',
    name: 'transform: the cheap one',
    description:
      'translate, scale, rotate. The GPU loves these — animate transform and opacity, almost never width/top.',
    status: 'upcoming',
    folder: 'demos/demo-5',
    goals: [
      'Why transform is faster than animating left/top',
      'Composing translate + scale + rotate',
      'transform-origin and why it matters',
    ],
  },
  {
    id: 'keyframes',
    number: '06',
    name: 'Keyframes for multi-step motion',
    description:
      "When a single from→to isn't enough — a pulse, a shake, a loop.",
    status: 'upcoming',
    folder: 'demos/demo-6',
    goals: [
      '@keyframes syntax and the animation shorthand',
      'iteration count, direction, fill-mode',
      'When keyframes beat a transition',
    ],
  },
  {
    id: 'reduced-motion',
    number: '07',
    name: 'Respect reduced motion',
    description:
      'Some users get motion-sick. Honor prefers-reduced-motion.',
    status: 'upcoming',
    folder: 'demos/demo-7',
    goals: [
      '@media (prefers-reduced-motion: reduce)',
      'What to keep vs. what to kill',
      'Default to motion, opt out gracefully',
    ],
  },
  {
    id: 'state-classes',
    number: '08',
    name: 'Animate from state',
    description:
      'Toggle a className when state changes — the browser handles the rest.',
    status: 'upcoming',
    folder: 'demos/demo-8',
    goals: [
      'Conditional className pattern',
      'Open / closed menu with a CSS transition',
      'Keep animation logic in CSS, state in React',
    ],
  },
  {
    id: 'mount-unmount',
    number: '09',
    name: 'Mount and unmount',
    description:
      'The hardest CSS animation problem: animating something out before React removes it.',
    status: 'upcoming',
    folder: 'demos/demo-9',
    goals: [
      'Why a naive conditional render skips the exit animation',
      'The deferred-unmount pattern',
      'When you should reach for a library instead',
    ],
  },
  {
    id: 'stagger',
    number: '10',
    name: 'Staggered list',
    description: 'Children that animate in one after the other.',
    status: 'upcoming',
    folder: 'demos/demo-10',
    goals: [
      'transition-delay per index',
      'When CSS variables on the parent make this clean',
      'The list-mounting trap (animating on every render)',
    ],
  },
  {
    id: 'press',
    number: '11',
    name: 'The press interaction',
    description:
      'Active states that feel physical — a button you can actually feel.',
    status: 'upcoming',
    folder: 'demos/demo-11',
    goals: [
      ':active vs. data-pressed',
      'Scale down on press, snap back on release',
      'Touch targets and hover-not-available devices',
    ],
  },
  {
    id: 'motion-intro',
    number: '12',
    name: 'animate, initial, exit',
    description:
      'The three props that replace 90% of your CSS animation code.',
    status: 'upcoming',
    folder: 'demos/demo-12',
    goals: [
      'Install Motion and animate a <motion.div>',
      'initial → animate is just the mount transition',
      'exit needs AnimatePresence',
    ],
  },
  {
    id: 'animate-presence',
    number: '13',
    name: 'AnimatePresence',
    description:
      'Solve mount/unmount properly — the thing that was painful in CSS.',
    status: 'upcoming',
    folder: 'demos/demo-13',
    goals: [
      'Wrap conditionally-rendered children',
      'mode="wait" vs. simultaneous',
      'Stable keys are mandatory',
    ],
  },
  {
    id: 'springs',
    number: '14',
    name: 'Springs vs. tweens',
    description:
      'Tweens hit a target at a time. Springs respond to physics. Pick on purpose.',
    status: 'upcoming',
    folder: 'demos/demo-14',
    goals: [
      'type: "spring" with stiffness / damping',
      'When a tween (ease, duration) is the right answer',
      'A go-to spring config worth remembering',
    ],
  },
  {
    id: 'variants',
    number: '15',
    name: 'Variants & orchestration',
    description:
      'Name your animation states and orchestrate children from the parent.',
    status: 'upcoming',
    folder: 'demos/demo-15',
    goals: [
      'Variant objects keyed by state name',
      'staggerChildren + delayChildren',
      'Propagating animate down the tree',
    ],
  },
  {
    id: 'layout',
    number: '16',
    name: 'Layout animations (FLIP)',
    description:
      'The trick that made everyone fall in love with Motion — smooth between any two layouts.',
    status: 'upcoming',
    folder: 'demos/demo-16',
    goals: [
      'The layout prop',
      'What FLIP actually does under the hood',
      "When layout transitions cost more than they're worth",
    ],
  },
  {
    id: 'drag',
    number: '17',
    name: 'Drag with constraints',
    description:
      'Make things draggable in a few props. Set bounds. Snap back.',
    status: 'upcoming',
    folder: 'demos/demo-17',
    goals: [
      'drag + dragConstraints',
      'dragElastic and how it feels',
      'Releasing into a spring',
    ],
  },
  {
    id: 'whilehover-tap',
    number: '18',
    name: 'whileHover / whileTap',
    description:
      'Tiny interaction states that disappear when no longer relevant.',
    status: 'upcoming',
    folder: 'demos/demo-18',
    goals: [
      'whileHover and whileTap as inline state',
      'Combining with variants',
      'Tap on touch, hover on pointer — Motion handles both',
    ],
  },
  {
    id: 'scroll-linked',
    number: '19',
    name: 'Scroll-linked motion',
    description: 'Animation that progresses with scroll, not with time.',
    status: 'upcoming',
    folder: 'demos/demo-19',
    goals: [
      'useScroll and scrollYProgress',
      'useTransform to map progress to any value',
      'When to use scroll-linked vs. scroll-triggered',
    ],
  },
  {
    id: 'shared-layout',
    number: '20',
    name: 'Shared layout (layoutId)',
    description:
      'The same element appearing in two places — Motion morphs between them.',
    status: 'upcoming',
    folder: 'demos/demo-20',
    goals: [
      'layoutId on both source and target',
      'Click a thumbnail, expand into a detail view',
      'Common gotchas with conditional rendering',
    ],
  },
  {
    id: 'svg',
    number: '21',
    name: 'Animating SVG paths',
    description: 'Draw-on lines, morphing icons, animated illustrations.',
    status: 'upcoming',
    folder: 'demos/demo-21',
    goals: [
      'pathLength as an animatable prop',
      'A check-mark that draws itself in',
      'Morphing between two path shapes',
    ],
  },
  {
    id: 'performance',
    number: '22',
    name: 'Performance & what to avoid',
    description: 'How to keep things at 60fps and what kills it.',
    status: 'upcoming',
    folder: 'demos/demo-22',
    goals: [
      'transform + opacity = cheap; layout properties = expensive',
      'will-change is a hint, not a fix',
      'Profile in DevTools before reaching for tricks',
    ],
  },
]
