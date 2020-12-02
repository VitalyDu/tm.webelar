<template>
  <div class="row">
    <div class="col s6 offset-s3 create-form">
      <h1>Создать задачу</h1>
      <form @submit.prevent="submitHandler">
        <div class="input-field">
            <input id="title" v-model="title" type="text" class="validate" required>
            <label for="title">Заголовок</label>
            <span class="helper-text" data-error="Title is required">Тэги</span>
        </div>
        <div class="chips" ref="chips"></div>
        <div class="input-field">
            <textarea id="description" v-model="description" class="materialize-textarea" data-length="120"></textarea>
            <label for="description">Описание</label>
            <span class="character-counter" style="float: right; font-size: 12px;">{{ description.length }}/120</span>
        </div>
        <input type="text" ref="datepicker">
        <button class="btn waves-effect waves-light" type="submit">Добавить</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'create',
  data: () => ({
    description: '',
    title: '',
    chips: null,
    date: null
  }),
  mounted(){
    this.chips = M.Chips.init(this.$refs.chips,{
      placeholder: 'Task tags'
    })
    this.date = M.Datepicker.init(this.$refs.datepicker,{
      format: 'dd.mm.yyyy',
      defaultDate: new Date(),
      setDefaultDate: true
    })
  },
  methods:{
    submitHandler(){
      const task = {
        title: this.title,
        description: this.description,
        id: Date.now(),
        status: 'active',
        tags: this.chips.chipsData,
        date: this.date.date
      }
      this.$store.dispatch('createTask', task)
      this.$router.push('/list')
    }
  },
  destroyed(){
    if (this.date && this.date.destroy){
      this.date.destroy()
    }
    if (this.chips && this.chips.destroy){
      this.chips.destroy()
    }
  }
}
</script>

<style lang="scss" scoped>
  .create-form{
    margin-top: 50px;
  }
  @media(max-width: 720px){
    .create-form{
      margin-left: 0!important;
      width: 100%!important;
    }
  }
</style>