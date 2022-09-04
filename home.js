var app = new Vue({
  el: '#app',
  data: {
    name: 'ヤング愛美',
    course: 'WEBエンジニアコース',
    acceptancePeriod: '2019年01月期',
    dafaultLastId: 3,
    students: [
      { id: 1, name: '野呂浩良', course: '機械学習コース', acceptancePeriod: '2019年1月期' },
      { id: 2, name: '富永修司', course: 'Webエンジニアコース', acceptancePeriod: '2017年11月期' },
      { id: 3, name: '斉藤一起', course: 'Webエンジニアコース', acceptancePeriod: '2017年11月期' }
    ]
  },

  methods: {
    addStudent: function() {
      this.students.push({
        id: this.students.length+1,
        name: this.name,
        course: this.course,
        acceptancePeriod: this.acceptancePeriod
      });

      this.id = "",
      this.name = "",
      this.course = "",
      this.acceptancePeriod = ""
    }
  }
})
