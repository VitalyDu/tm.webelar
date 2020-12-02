<template>
  <div>
    <h1>Список задач</h1>
    <div class="row">
        <div class="input-field col s6 filter">
            <select ref="select" v-model="filter">
            <option value="" disabled selected>Выберите статус</option>
            <option value="active" class="green-text accent-4-text">В работе</option>
            <option value="Просрочено" class="red-text darken-4-text">Просрочено</option>
            <option value="completed" class="yellow-text accent-4-text">Выполнено</option>
            </select>
            <label>Фильтр</label>
        </div>
    </div>
    <button v-if="filter" class="btn btn-small red" @click="filter = null">Очистить фильтр</button>
    <hr>
    <div v-if="tasks.length" class="tasks">
      <div class="task z-depth-3" v-for="(task, idx) of displayTasks" :key="task.id">
        <div class="number">
          {{idx + 1}}{{task.chips}}
          <div class="chips" ref="chips"></div>
        </div>
        <div class="title">
          <h2>{{task.title}}</h2>
        </div>
        <div class="description">
          <p>{{task.description}}</p>
        </div>
        <div class="bottom">
          <div class="status_date">
            <span v-if="task.status === 'active'" class="green-text accent-4-text task_status"><i class="tiny material-icons">access_time</i>{{task.status}}</span>
            <span v-else-if="task.status === 'completed'" class="yellow-text accent-4-text task_status"><i class="tiny material-icons">check</i>{{task.status}}</span>
            <span v-else-if="task.status === 'Просрочено'" class="red-text darken-4-text task_status"><i class="tiny material-icons">alarm_off</i>{{task.status}}</span>
            <span class="date">{{new Date(task.date).toLocaleDateString()}}</span>
          </div>
          <div class="task_link">
              <router-link tag="button" class="btn btn-small" :to="'/task/' + task.id">
                Открыть
              </router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- <table v-if="tasks.length">
      <thead>
        <tr>
            <th>#</th>
            <th>Название</th>
            <th>Дата</th>
            <th>Описание</th>
            <th>Статус</th>
            <th></th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(task, idx) of displayTasks"
          :key="task.id"
        >
            <td>{{idx + 1}}</td>
            <td>{{task.title}}</td>
            <td>{{new Date(task.date).toLocaleDateString()}}</td>
            <td class="td">
                <div class="text">{{task.description}}</div>
            </td>
            <td v-if="task.status === 'active'" class="green-text accent-4-text task_status"><i class="tiny material-icons">access_time</i>{{task.status}}</td>
            <td v-else-if="task.status === 'completed'" class="yellow-text accent-4-text task_status"><i class="tiny material-icons">check</i>{{task.status}}</td>
            <td v-else-if="task.status === 'outdated'" class="red-text darken-4-text task_status"><i class="tiny material-icons">alarm_off</i>{{task.status}}</td>
            <td>
                <router-link tag="button" class="btn btn-small" :to="'/task/' + task.id">
                    Открыть
                </router-link>
            </td>
        </tr>
      </tbody>
    </table> -->
    <p v-else>No tasks</p>
  </div>
</template>

<script>
export default {
  data: () => ({
    filter: null,
  }),
  computed: {
    tasks() {
      return this.$store.getters.tasks
    },
    displayTasks() {
      return this.tasks.filter(t => {
        if (!this.filter) {
          return true
        }
        return t.status === this.filter
      })
    }
  },
  mounted() {
    M.FormSelect.init(this.$refs.select)
  }
}
</script>

<style lang="scss" scoped>

  .td {
    max-width: 400px;
  }

  .task_status{
    display: flex;
    align-items: center;
  }

  .task_status i{
    margin-right: 5px;
    margin-top: 3px;
  }

  .text {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  
  .tasks{
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
  }
  .task{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 32%;
    width: 100%;
    padding: 20px;
    margin-bottom: 10px;
    margin-right: 10px;
    &:nth-of-type(3n){
      margin-right: 0;
    }
    .number{
      display: flex;
      justify-content: flex-start;
    }
    .title{
      display: flex;
      justify-content: center;
    }
    .description{
      display: flex;
      justify-content: flex-start;
      p{
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;  
        overflow: hidden;
      }
    }
    .bottom{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .status_date{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }
    }
  }
  @media(max-width: 1200px){
    .task{
      max-width: 49%;
      &:nth-of-type(2n){
        margin-right: 0;
      }
    }
  }
  @media(max-width: 565px){
    .task{
      max-width: 100%;
      margin-right: 0;
    }
    .filter{
      width: 230px!important;
    }
  }
  @media(max-width: 420px){
    .task{
      box-sizing: content-box;
    }
  }
</style>