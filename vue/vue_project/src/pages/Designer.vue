<template>
    <div id="designer">
        <header>
            <div id="title">
                <h2>设计师</h2>
                <p>designer</p>
            </div>
        </header>
        <div id="body">
            
        </div>
        <div id="footer">
            <ul>
                <li @click="$router.push({ path: '/home' })">
                    <img src="../assets/store0.png" alt>
                </li>
                <li @click="$router.push({ path: '/fund' })">
                    <img src="../assets/fund0.png" alt>
                </li>
                <li @click="$router.push({ path: '/designer' })">
                    <img src="../assets/designer1.png" alt>
                </li>
                <li @click="$router.push({ path: '/service' })">
                    <img src="../assets/service0.png" alt>
                </li>
                <li @click="$router.push({ path: '/me' })">
                    <img src="../assets/me0.png" alt>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scope>
    #designer {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
    }
</style>