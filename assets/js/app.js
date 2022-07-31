
  import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
  
  const appConfig = {
    data(){
      return{
        inn: '',
        birthDate: null
      }
    },

    computed: {
      checkValidity(){

        if(this.inn.length == 10){
          let arrInn = [...this.inn].map( (item) => +item );
          let sum = arrInn[0] * -1 + arrInn[1] * 5 + arrInn[2] * 7 + arrInn[3] * 9 + arrInn[4] * 4 + arrInn[5] * 6 + arrInn[6] * 10 + arrInn[7] * 5 + arrInn[8] * 7;

          let checkN = sum % 11;

          if (checkN == 10){
            checkN = 0;
          }

          if(checkN == arrInn[9]){
            return true;
          }else{
            return false;
          }
        }
      },

      getBirthDate(){
          let daysPassed = +this.inn.slice(0, 5);
          let innDate = new Date(1899, 11, 31);
          this.birthDate = new Date(innDate.setDate(innDate.getDate() + daysPassed));
          return this.birthDate.toLocaleDateString()
      },

      getGender(){
        if (+this.inn[8] % 2 == 0){
          return 'женский';
        }else {
          return 'мужской';
        }
      },

      getZodiacSign(){
        const firstDays = [21, 20, 21, 21, 22, 22, 23, 24, 24, 24, 23, 22];
        const zodiacSign = ['Водолей', 'Рыбы', 'Овен', 'Телец', 'Близнецы', 'Рак', 'Лев', 'Дева', 'Весы', 'Скорпион', 'Стрелец', 'Козерог'];
        let month = this.birthDate.getMonth();
        let day = this.birthDate.getDate();
        if(month == 0 && day <= 20){
          month = 11;
        }else if(day < firstDays[month]){
          month--;
        }
        return zodiacSign[month];
      },

      getChineseSign(){
        let animals = ['Обезьяна', 'Петух', 'Собака', 'Свинья', 'Крыса', 'Бык', 'Тигр', 'Кролик', 'Дракон', 'Змея', 'Лошадь', 'Коза'];
        let year = this.birthDate.getFullYear();
        return animals[year % 12];

      }
    }
  }

  const app = createApp(appConfig);

  app.mount('#app');
