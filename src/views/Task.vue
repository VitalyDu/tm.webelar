<template>
    <div class="row">
        <div v-if="task" class="col s6 offset-s3 update-form">
            <h1>{{task.title}}</h1>
            <form @submit.prevent="submitHandler">
                <div class="chips" ref="chips"></div>
                <div class="input-field">
                    <textarea style="min-height: 150px;" id="description" v-model="description" class="materialize-textarea" data-length="120"></textarea>
                    <label for="description">Textarea</label>
                    <span class="character-counter" style="float: right; font-size: 12px;">{{ description.length }}/120</span>
                </div>
                <input type="text" ref="datepicker">
                <div v-if="task.status !== 'completed'" class="buttons">
                    <button class="btn" type="submit" style="margin-right: 1rem; display: flex; align-items: center;"><i class="large material-icons">autorenew</i>Обновить</button>
                    <button class="btn blue" type="button" @click="completeTask">Завершить задание</button>
                </div>
            </form>
        </div>
        <p v-else>Task not found</p>
    </div>
</template>

<script>
export default {
    computed: {
    task() {
      return this.$store.getters.taskById(+this.$route.params.id)
    }
  },
  data: () => ({
    description: '',
    chips: null,
    date: null,
  }),
  mounted() {
    this.description = this.task.description
    this.chips = M.Chips.init(this.$refs.chips, {
      placeholder: 'Task tags',
      data: this.task.tags
    })
    this.date = M.Datepicker.init(this.$refs.datepicker, {
      format: 'dd.mm.yyyy',
      defaultDate: new Date(this.task.date),
      setDefaultDate: true
    })
    setTimeout(() => {
      M.updateTextFields()
    }, 0)
  },
  methods: {
    submitHandler() {
      this.$store.dispatch('updateTask', {
        id: this.task.id,
        description: this.description,
        date: this.date.date
      })
      this.$router.push('/list')
    },
    completeTask() {
      this.$store.dispatch('completeTask', this.task.id)
      this.$router.push('/list')
    }
  },
  destroyed() {
    if (this.date && this.date.destroy) {
      this.date.destroy()
    }

    if (this.chips && this.chips.destroy) {
      this.chips.destroy()
    }
  }
}
</script>

<style>
    .buttons{
        display: flex;
        flex-direction: row;
    }
    .buttons .btn{
        display: flex;
        align-items: center;
        margin-right: 1rem;
    }
    .buttons .btn:last-of-type{
        margin-right: 0;
    }
    .update-form{
        margin-top: 50px;
    }
    @media(max-width: 720px){
        .update-form{
        margin-left: 0!important;
        width: 100%!important;
        }
    }
</style>