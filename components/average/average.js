const average_cal = (x, y,z) => { return (x + y +z)/3}

const adder = new Vue({
  el: '#adder',
  data: {
    grade1:1,
    grade2: 2,
    grade3: 3
  },
  computed: {
    average: function () {
      const i = parseInt(this.grade1)
      const j = parseInt(this.grade2)      
      const k=  parseInt(this.grade3)
      return  `Your average is ${average_cal(i, j,k)}.`
    }
  }
})