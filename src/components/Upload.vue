<template>
    <div>
        <el-upload
            class="upload-demo"
            drag
            action="http://localhost:8080/upload"
            multiple
			:on-success="onSuccess"
        >
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">
                将文件拖到此处，或
                <em>点击上传</em>
            </div>
            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
    </div>
</template>

<script>
export default {
    name: "Upload",
    props: {
        msg: String
	},
	methods: {
		onSuccess(a, b, c) {
			console.log(a);
			console.log(b);
			console.log(c);
			
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
