// @generated
//  This file was automatically generated and should not be edited.

import Apollo
import Foundation

public final class WigdetQueryQuery: GraphQLQuery {
  /// The raw GraphQL definition of this operation.
  public let operationDefinition: String =
    """
    query WigdetQuery {
      beers(first: 8) {
        __typename
        nodes {
          __typename
          id
          name
          kind
          description
          startDate
          bottleDate
          readyDate
          recipeUrl
        }
      }
    }
    """

  public let operationName: String = "WigdetQuery"

  public init() {
  }

  public struct Data: GraphQLSelectionSet {
    public static let possibleTypes: [String] = ["Query"]

    public static var selections: [GraphQLSelection] {
      return [
        GraphQLField("beers", arguments: ["first": 8], type: .nonNull(.object(Beer.selections))),
      ]
    }

    public private(set) var resultMap: ResultMap

    public init(unsafeResultMap: ResultMap) {
      self.resultMap = unsafeResultMap
    }

    public init(beers: Beer) {
      self.init(unsafeResultMap: ["__typename": "Query", "beers": beers.resultMap])
    }

    /// Beers being brewed
    public var beers: Beer {
      get {
        return Beer(unsafeResultMap: resultMap["beers"]! as! ResultMap)
      }
      set {
        resultMap.updateValue(newValue.resultMap, forKey: "beers")
      }
    }

    public struct Beer: GraphQLSelectionSet {
      public static let possibleTypes: [String] = ["BeerConnection"]

      public static var selections: [GraphQLSelection] {
        return [
          GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
          GraphQLField("nodes", type: .list(.object(Node.selections))),
        ]
      }

      public private(set) var resultMap: ResultMap

      public init(unsafeResultMap: ResultMap) {
        self.resultMap = unsafeResultMap
      }

      public init(nodes: [Node?]? = nil) {
        self.init(unsafeResultMap: ["__typename": "BeerConnection", "nodes": nodes.flatMap { (value: [Node?]) -> [ResultMap?] in value.map { (value: Node?) -> ResultMap? in value.flatMap { (value: Node) -> ResultMap in value.resultMap } } }])
      }

      public var __typename: String {
        get {
          return resultMap["__typename"]! as! String
        }
        set {
          resultMap.updateValue(newValue, forKey: "__typename")
        }
      }

      /// A list of nodes.
      public var nodes: [Node?]? {
        get {
          return (resultMap["nodes"] as? [ResultMap?]).flatMap { (value: [ResultMap?]) -> [Node?] in value.map { (value: ResultMap?) -> Node? in value.flatMap { (value: ResultMap) -> Node in Node(unsafeResultMap: value) } } }
        }
        set {
          resultMap.updateValue(newValue.flatMap { (value: [Node?]) -> [ResultMap?] in value.map { (value: Node?) -> ResultMap? in value.flatMap { (value: Node) -> ResultMap in value.resultMap } } }, forKey: "nodes")
        }
      }

      public struct Node: GraphQLSelectionSet {
        public static let possibleTypes: [String] = ["Beer"]

        public static var selections: [GraphQLSelection] {
          return [
            GraphQLField("__typename", type: .nonNull(.scalar(String.self))),
            GraphQLField("id", type: .nonNull(.scalar(GraphQLID.self))),
            GraphQLField("name", type: .scalar(String.self)),
            GraphQLField("kind", type: .scalar(String.self)),
            GraphQLField("description", type: .scalar(String.self)),
            GraphQLField("startDate", type: .scalar(String.self)),
            GraphQLField("bottleDate", type: .scalar(String.self)),
            GraphQLField("readyDate", type: .scalar(String.self)),
            GraphQLField("recipeUrl", type: .nonNull(.scalar(String.self))),
          ]
        }

        public private(set) var resultMap: ResultMap

        public init(unsafeResultMap: ResultMap) {
          self.resultMap = unsafeResultMap
        }

        public init(id: GraphQLID, name: String? = nil, kind: String? = nil, description: String? = nil, startDate: String? = nil, bottleDate: String? = nil, readyDate: String? = nil, recipeUrl: String) {
          self.init(unsafeResultMap: ["__typename": "Beer", "id": id, "name": name, "kind": kind, "description": description, "startDate": startDate, "bottleDate": bottleDate, "readyDate": readyDate, "recipeUrl": recipeUrl])
        }

        public var __typename: String {
          get {
            return resultMap["__typename"]! as! String
          }
          set {
            resultMap.updateValue(newValue, forKey: "__typename")
          }
        }

        public var id: GraphQLID {
          get {
            return resultMap["id"]! as! GraphQLID
          }
          set {
            resultMap.updateValue(newValue, forKey: "id")
          }
        }

        public var name: String? {
          get {
            return resultMap["name"] as? String
          }
          set {
            resultMap.updateValue(newValue, forKey: "name")
          }
        }

        public var kind: String? {
          get {
            return resultMap["kind"] as? String
          }
          set {
            resultMap.updateValue(newValue, forKey: "kind")
          }
        }

        public var description: String? {
          get {
            return resultMap["description"] as? String
          }
          set {
            resultMap.updateValue(newValue, forKey: "description")
          }
        }

        public var startDate: String? {
          get {
            return resultMap["startDate"] as? String
          }
          set {
            resultMap.updateValue(newValue, forKey: "startDate")
          }
        }

        public var bottleDate: String? {
          get {
            return resultMap["bottleDate"] as? String
          }
          set {
            resultMap.updateValue(newValue, forKey: "bottleDate")
          }
        }

        public var readyDate: String? {
          get {
            return resultMap["readyDate"] as? String
          }
          set {
            resultMap.updateValue(newValue, forKey: "readyDate")
          }
        }

        public var recipeUrl: String {
          get {
            return resultMap["recipeUrl"]! as! String
          }
          set {
            resultMap.updateValue(newValue, forKey: "recipeUrl")
          }
        }
      }
    }
  }
}
