<template>
  <div id="timebarcontainer">
    <!-- set progressbar -->
    <div class="timeprogressbar">
      <progress-bar type="line" ref="timeline" :options="options"></progress-bar>
    </div>
    <div class="levelprogressbar">
      <progress-bar type="line" ref="levelline" :options="options"></progress-bar>
    </div>

    <div class="playerholder">
      <div v-for="character in hello" class="playercharacter">
        <p>{{ character.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Arena',
  data() {
    return {
      options: {
        color: '#007AFF',
        strokeWidth: 1.0,
        svgStyle: {
          display: 'block',
          width: '100%',
          height: '20px'
        },
      },
      hello: [
        { 
          name: "Naruto",
          health: 0.85
        },
        { 
          name: "Sakura",
          health: 0.5
        },
        { 
          name: "Sasuke",
          health: 0.7
        },
      ],
      blah: [1,2,3]
    }
  },
  mounted: function () {
    this.$refs.timeline.animate(1.0, {duration: 60000})
    this.$refs.levelline.set(0.29)
  }
}
</script>
<style>
.playerholder {
  top: 200px;
}
.timeprogressbar {
  position: relative;
  top: 30px;
  left: 100px;
  height: 20px;
  width: 600px;
  border: 3px solid #73AD21;
}

.levelprogressbar {
  position: relative;
  top: 7px;
  left: 900px;
  height: 20px;
  width: 600px;
  border: 3px solid #73AD21;
}
</style>
