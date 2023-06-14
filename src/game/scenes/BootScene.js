import { Scene } from 'phaser'
import sky from '@/game/assets/sky.png'
import ground from '@/game/assets/platform.png'
import star from '@/game/assets/star.png'
import bomb from '@/game/assets/bomb.png'
import dude from '@/game/assets/dude.png'

export default class BootScene extends Scene {
  constructor () {
    super({ key: 'BootScene' })
  }

  preload () {
    this.load.image('sky', sky);
    this.load.image('ground', ground);
    this.load.image('star', star);
    this.load.image('bomb', bomb);
    this.load.spritesheet('dude', dude, { frameWidth: 32, frameHeight: 48 });
  }

  create () {
    this.scene.start('PlayScene')
  }
}
