<template>
  <div>
    <label class="form-label">{{label}}</label>
    <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon1" :style="inputStyle">@</span>
      <input :type="typeData" class="form-control" :required="required" :placeholder="placeholderStyle" :aria-label="label" aria-describedby="basic-addon1">
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormItem',
  props: {
    required: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: null
    },
    inputStyle: {
      type: String,
      default: null
    },
    placeholderStyle: {
      type: String,
      default: null
    },
    typeData: {
      type: String,
      default: null
    }
  }
}
</script>
