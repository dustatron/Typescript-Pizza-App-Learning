export function log(str: string) { 
  console.log(str)
}

class A { 
  greeting = "hello World"
}

log(new A().greeting);