import { AllChapters, findSceneById } from '../data/chapters'

export const SCENE_IDS = {
  BACK_TO_MENU: 'back-to-menu',
  COMING_SOON: 'coming-soon',
  FALLBACK_ERROR: '__fallback_error__'
}

function createFallbackScene(sceneId, reason = 'missing_scene') {
  const target = sceneId || '未知场景'
  return {
    id: SCENE_IDS.FALLBACK_ERROR,
    type: 'result',
    title: '场景加载失败',
    content: `系统未找到场景：${target}\n\n原因：${reason}\n\n你可以返回主菜单后重新开始。`,
    choices: [
      {
        text: '返回主菜单',
        nextScene: SCENE_IDS.BACK_TO_MENU
      }
    ]
  }
}

function findSceneAcrossChapters(sceneId) {
  for (const [chapterId, chapter] of Object.entries(AllChapters)) {
    const scene = chapter.scenes.find(item => item.id === sceneId)
    if (scene) {
      return { scene, chapterId }
    }
  }
  return null
}

export function resolveScene(sceneId, preferredChapterId = null) {
  if (sceneId === SCENE_IDS.BACK_TO_MENU) {
    return {
      scene: { id: SCENE_IDS.BACK_TO_MENU, type: 'menu', title: '主菜单' },
      chapterId: preferredChapterId,
      reason: 'menu'
    }
  }

  if (!sceneId || typeof sceneId !== 'string') {
    return {
      scene: createFallbackScene(sceneId, 'invalid_scene_id'),
      chapterId: preferredChapterId,
      reason: 'invalid_scene_id'
    }
  }

  if (preferredChapterId) {
    const scene = findSceneById(preferredChapterId, sceneId)
    if (scene) {
      return { scene, chapterId: preferredChapterId, reason: 'preferred_chapter' }
    }
  }

  const globalScene = findSceneAcrossChapters(sceneId)
  if (globalScene) {
    return { ...globalScene, reason: 'global_search' }
  }

  return {
    scene: createFallbackScene(sceneId),
    chapterId: preferredChapterId,
    reason: 'missing_scene'
  }
}

export function isValidStoryScene(scene) {
  return Boolean(
    scene &&
    typeof scene === 'object' &&
    typeof scene.title === 'string' &&
    typeof scene.content === 'string'
  )
}

export function isValidBattleScene(scene) {
  return Boolean(
    isValidStoryScene(scene) &&
    scene.type === 'battle' &&
    scene.enemy &&
    typeof scene.enemy.maxHp === 'number' &&
    Array.isArray(scene.playerAttacks) &&
    scene.playerAttacks.length > 0
  )
}

