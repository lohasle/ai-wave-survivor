import { beforeEach, describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import App from '../App'

function writeSave(data) {
  localStorage.setItem('ai-wave-survivor-save', JSON.stringify({
    savedAt: Date.now(),
    ...data
  }))
}

describe('App flow stability', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('renders first story scene after starting a new game', async () => {
    render(<App />)

    fireEvent.click(screen.getByRole('button', { name: /开始游戏/ }))

    expect(await screen.findByRole('heading', { name: '投简历' })).toBeInTheDocument()
    expect(screen.getByText(/你打开招聘网站/)).toBeInTheDocument()
  })

  it('recovers from invalid saved scene without blank content', async () => {
    writeSave({
      phase: 'story',
      chapterId: 'chapter1',
      player: { hp: 100, maxHp: 100, stress: 0, reputation: 0, skills: [], inventory: [] },
      currentScene: { id: 'invalid-scene-id' }
    })

    render(<App />)

    fireEvent.click(screen.getByRole('button', { name: /继续游戏/ }))

    expect(await screen.findByRole('heading', { name: '场景加载失败' })).toBeInTheDocument()
    expect(screen.getByText(/系统未找到场景/)).toBeInTheDocument()
  })

  it('shows game-over actions and can return to start screen', async () => {
    writeSave({
      phase: 'game_over',
      chapterId: 'chapter1',
      player: { hp: 0, maxHp: 100, stress: 20, reputation: 0, skills: [], inventory: [] },
      currentScene: null
    })

    render(<App />)

    fireEvent.click(screen.getByRole('button', { name: /继续游戏/ }))
    expect(await screen.findByRole('heading', { name: '战斗失败' })).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: /返回主菜单/ }))
    expect(await screen.findByRole('button', { name: /开始游戏/ })).toBeInTheDocument()
  })
})
