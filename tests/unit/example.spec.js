import {mount} from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld'
import MyButton from '@/components/button'

describe('测试Vue组件实例',()=>{
  const wrapper = mount(HelloWorld);
  it("test props", ()=>{
    wrapper.setProps( {msg: "hello"})
    expect(wrapper.vm.msg).toBe("hello")
  })
  it("test data", ()=>{
    const title = "i am title in test"
    wrapper.setData( {title: title})
    expect(wrapper.vm.title).toBe(title)
  })
  it("test dom", ()=>{
    // expect(wrapper.find('.hello h1').text()).toBe('hello')
    console.log(wrapper.find(".hello h1").name());
    expect(wrapper.find(".hello h1").is('div'))
  })

})

describe('测试Vue组件实例',()=>{
  const wrapper = mount(MyButton);
  it("test events", ()=>{
    const mockFn = jest.fn();
    wrapper.setMethods({
      increment: mockFn
    })
    wrapper.find("button").trigger("click")
    expect(mockFn).toBeCalled();
    // 查看是否有回调和回调次数
    expect(mockFn).toHaveBeenCalledTimes(1)
  })
})


test('测试jest.fn()调用', () => {
  let mockFn = jest.fn();
  let result = mockFn(1, 2, 3);

  expect(mockFn).toBeCalled();
  expect(mockFn).toHaveBeenCalledWith(1, 2, 3);
})

test('测试jest.fn()返回固定值', () => {
  let mockFn = jest.fn().mockReturnValue('default');
  expect(mockFn()).toBe('default');

  let mockFn1 = jest.fn((num1, num2) => {
    return num1 * num2;
  })
  expect(mockFn1(10, 10)).toBe(100);
  
})
