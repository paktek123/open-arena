import { beforeEachHooks, afterEachHooks, shallow, fakeGetters, fakeActions, simulate } from 'vue-unit'
// import { shallow, mockRouter, mockStore } from 'vuenit'
import MainNav from 'src/components/MainNav'

describe('MainNav.vue', () => {
  beforeEach(beforeEachHooks)

  it('should have the login button show when the user is not logged in', function () {
    fakeGetters('isLoggedIn', false)
    const vm = shallow(MainNav)

    expect(vm.$refs.login).to.exist
    expect(vm.$refs.logout).to.not.exist
  })

  it('should have the logout button show when the user is logged in', function () {
    fakeGetters('isLoggedIn', true)
    const vm = shallow(MainNav)

    expect(vm.$refs.logout).to.exist
    expect(vm.$refs.login).to.not.exist
  })

  it('should dispatch a logout action when the logout button is clicked', function () {
    let logoutAction = fakeActions('logout')
    fakeGetters('isLoggedIn', true)
    const vm = shallow(MainNav)

    simulate(vm.$refs.logout, 'click')

    expect(logoutAction).to.have.been.calledOnce
  })

  afterEach(afterEachHooks)
})
