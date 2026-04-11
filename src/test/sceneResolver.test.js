import { describe, it, expect } from 'vitest'
import { resolveScene, SCENE_IDS, isValidBattleScene } from '../utils/sceneResolver'

describe('sceneResolver', () => {
  it('resolves start scene with chapter context', () => {
    const resolved = resolveScene('1-1', 'chapter1')
    expect(resolved.scene.id).toBe('1-1')
    expect(resolved.chapterId).toBe('chapter1')
  })

  it('resolves coming-soon to a real scene', () => {
    const resolved = resolveScene('coming-soon', 'chapter6')
    expect(resolved.scene.id).toBe('coming-soon')
    expect(resolved.scene.title).toContain('当前版本通关')
    expect(resolved.chapterId).toBe('chapter6')
  })

  it('returns fallback scene for missing scene id', () => {
    const resolved = resolveScene('missing-scene-id', 'chapter1')
    expect(resolved.scene.id).toBe(SCENE_IDS.FALLBACK_ERROR)
    expect(resolved.scene.content).toContain('missing-scene-id')
  })

  it('resolves back-to-menu as menu scene', () => {
    const resolved = resolveScene(SCENE_IDS.BACK_TO_MENU, 'chapter2')
    expect(resolved.scene.type).toBe('menu')
    expect(resolved.chapterId).toBe('chapter2')
  })

  it('validates battle scene shape', () => {
    const battleScene = resolveScene('1-2', 'chapter1').scene
    expect(isValidBattleScene(battleScene)).toBe(true)
  })
})
