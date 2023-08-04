/**
 * @jest-environment jsdom
 */

import { ScreenConfig } from '../src/types'
import {
  useScreen,
  DEFAULT_WIDTH,
  DEFAULT_HEIGHT,
  DEFAULT_ORIENTATION,
  DEFAULT_TOUCH_SUPPORT
} from '../src/useScreen'

import { watchEffect } from 'vue'

describe('useScreen Browser', () => {

  it('creates a screen object with default properties', () => {
    const screen = useScreen()

    expect(screen).toStrictEqual({
      resolution: `${window.innerWidth}x${window.innerHeight}`,
      width: window.innerWidth,
      height: window.innerHeight,
      orientation: DEFAULT_ORIENTATION,
      portrait: DEFAULT_ORIENTATION === 'portrait',
      landscape: DEFAULT_ORIENTATION !== 'portrait',
      touch: 'ontouchstart' in window
    })
  })

  it('creates a screen object with custom properties', () => {
    const config = {
      width: 1024,
      height: 768,
      orientation: 'landscape',
      touch: false,
    } satisfies ScreenConfig

    const screen = useScreen(config, 300)

    expect(screen).toStrictEqual({
      resolution: `${config.width}x${config.height}`,
      width: config.width,
      height: config.height,
      orientation: config.orientation,
      portrait: false,
      landscape: true,
      touch: false
    })
  })

  it('creates a reactive screen object', async () => {
    const screen = useScreen()

    await new Promise((resolve) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      screen.width = 800
      watchEffect(() => resolve(screen))
    })

    expect(screen.width).toBe(800)
  })

})
