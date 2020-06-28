# node-graphql-yoga

## 설명
GraphQL은 Graph Query Language의 줄임말이다.

Query Language란 정보를 얻기 위해 보내는 쿼리를 만들기 위해 사용되는 컴퓨터 언어의 일종을 뜻한다.

즉, GraphQL은 Server API를 통해 정보를 주고받기 위해 사용하는 Query Language라고 할 수 있다. (쿼리를 통해 데이터를 주고 받을 수 있다.)

또한, 전체 API를 위해서 단 하나의 Endpoint 만을 사용하는데,

여기서 Endpoint란 같은 URI에 대해서도 다른 요청을 할 수 있게끔 구별해주는 항목을 얘기한다.

-> URI + HTTP 메서드 = Endpoint 라고 봐도 될 것 같다.

<br>

## 장단점

### 장점
- 사용자 측에서 쿼리를 통해 데이터를 가져올 수 있기 때문에 필요한 정보만을 얻는 것이 가능하다.

- 원하는 정보를 하나의 Query에 모두 담아 요청 할 수 있기 때문에 HTTP 요청 횟수를 줄일 수 있고 HTTP의 응답 사이즈 역시 줄일 수 있다. (Under/Over Fetching 방지)

### 단점
- 파일 전송 등 텍스트 만으로 하기 힘든 내용들을 처리하기 복잡하다.

- 고정된 요청과 응답만 필요할 경우에는 쿼리로 인해 RESTful API 보다 요청의 크기가 커진다.

- 재귀적인 쿼리가 불가능하다. (응답의 깊이가 얼마든지 깊어질 수 있는 API를 만들 수 없다.)

<br>

## 용어 간단 정리

### Query
읽기 작업을 하는 GraphQL문

### Mutation
추가, 삭제 등과 같은 데이터 수정 작업을 하는 GraphQL문

### Schema
Query와 Mutation의 return type과 arguments type 및 custom type, custom interface, enum type 등과 input value의 default값 등을 정의한 코드

-> 그냥 쉽게 타입 정의한다고 보면 될 것 같다.

### Resolver
schema에서 정의된 Query와 Mutation의 구조에 맞추어 return type과 arguments type에 맞추어 설정한 코드

-> schema가 단순히 타입을 지정한다면, Resolver는 설정된 타입을 기반으로 실제 데이터를 어떤 식으로 전달할 지 설정하는 듯 하다. (아래 예시 참고)

```typescript
// schema
type Book {
  id: String!
  title: String!
  description: String!
}

type Query {
  books: [Book]!
}

// Resolver
const getBooks = () => ([
  {
    id: '1',
    title: '안냥',
    description: '인사의 달인'
  },
  {
    id: '2',
    title: '하윙',
    description: '인사란 무엇인가?'
  }
]);

const resolvers = {
  Query: {
    books: () => getBooks()
  }
};
```

<br>

## 마무리

### GraphQL Playground 에서의 API Query 예시

![API Query 결과 이미지](https://user-images.githubusercontent.com/23455736/85943867-ccfe1980-b96d-11ea-9a97-0f667cdc047b.png)


### 출처
1. [https://www.holaxprogramming.com/2018/01/20/graphql-vs-restful-api/](https://www.holaxprogramming.com/2018/01/20/graphql-vs-restful-api/)

2. [https://eomtttttt-develop.tistory.com/225?category=912665](https://eomtttttt-develop.tistory.com/225?category=912665)
