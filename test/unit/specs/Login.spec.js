import { beforeEachHooks, afterEachHooks, shallow, fakeActions, simulate } from 'vue-unit'
import Login from 'components/Login'

describe('Login.vue', () => {
  beforeEach(beforeEachHooks)

  it('should dispatch a login action with the username and password when the form is submitted', () => {
    let loginAction = fakeActions('login')
    const vm = shallow(Login)

    vm.username = 'hello'
    vm.password = 'secret'

    simulate(vm.$refs.loginSubmit, 'click')
    expect(loginAction).to.have.been.calledOnce.and.calledWith({username: 'hello', password: 'secret'})
  })

  afterEach(afterEachHooks)
})
