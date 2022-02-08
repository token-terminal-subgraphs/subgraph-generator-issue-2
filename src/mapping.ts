import { Address, Bytes, BigInt } from "@graphprotocol/graph-ts"
import {
  ManatokenV1proxyownerupdateV1E,
  ManatokenV1proxyupdatedV1E,
} from "../generated/schema"
import {
  CollectionmanagerV1acceptedtokensetV1E,
  CollectionmanagerV1committeemethodsetV1E,
  CollectionmanagerV1committeesetV1E,
  CollectionmanagerV1feescollectorsetV1E,
  CollectionmanagerV1metatransactiexecutedV1E,
  CollectionmanagerV1ownershiptransferredV1E,
  CollectionmanagerV1raritiessetV1E,
} from "../generated/schema"
import {
  MarketplaceV1chanfeescollcutpermilV1E,
  MarketplaceV1changedpublicationfeeV1E,
  MarketplaceV1changroyalcutpermilliV1E,
  MarketplaceV1feescollectorsetV1E,
  MarketplaceV1metatransactiexecutedV1E,
  MarketplaceV1ordercancelledV1E,
  MarketplaceV1ordercreatedV1E,
  MarketplaceV1ordersuccessfulV1E,
  MarketplaceV1ownershiptransferredV1E,
  MarketplaceV1pausedV1E,
  MarketplaceV1royaltiesmanagersetV1E,
  MarketplaceV1unpausedV1E,
  MarketplaceV1changownercutpermilliV1E,
} from "../generated/schema"
import {
  Marketplacev2V1chanfeescollcutpermilV1E,
  Marketplacev2V1changedpublicationfeeV1E,
  Marketplacev2V1changroyalcutpermilliV1E,
  Marketplacev2V1feescollectorsetV1E,
  Marketplacev2V1metatransactiexecutedV1E,
  Marketplacev2V1ordercancelledV1E,
  Marketplacev2V1ordercreatedV1E,
  Marketplacev2V1ordersuccessfulV1E,
  Marketplacev2V1ownershiptransferredV1E,
  Marketplacev2V1pausedV1E,
  Marketplacev2V1royaltiesmanagersetV1E,
  Marketplacev2V1unpausedV1E,
} from "../generated/schema"
import {
  CollectionfactoryV1implementationsetV1E,
  CollectionfactoryV1ownershiptransferredV1E,
  CollectionfactoryV1proxycreatedV1E,
} from "../generated/schema"
import {
  CollectionstoreV1boughtV1E,
  CollectionstoreV1metatransactiexecutedV1E,
  CollectionstoreV1ownershiptransferredV1E,
  CollectionstoreV1setfeeV1E,
  CollectionstoreV1setfeeownerV1E,
} from "../generated/schema"
import {
  CollectionimplementationV1additemV1E,
  CollectionimplementationV1approvalV1E,
  CollectionimplementationV1approvalforallV1E,
  CollectionimplementationV1baseuriV1E,
  CollectionimplementationV1completeV1E,
  CollectionimplementationV1creatorshiptransferreV1E,
  CollectionimplementationV1issueV1E,
  CollectionimplementationV1metatransactiexecutedV1E,
  CollectionimplementationV1ownershiptransferredV1E,
  CollectionimplementationV1rescueitemV1E,
  CollectionimplementationV1setapprovedV1E,
  CollectionimplementationV1seteditableV1E,
  CollectionimplementationV1setglobalmanagerV1E,
  CollectionimplementationV1setglobalminterV1E,
  CollectionimplementationV1setitemmanagerV1E,
  CollectionimplementationV1setitemminterV1E,
  CollectionimplementationV1transferV1E,
  CollectionimplementationV1updateitemdataV1E,
} from "../generated/schema"
import {
  ProxyOwnerUpdate as MANATokenV1ProxyOwnerUpdateV1Event,
  ProxyUpdated as MANATokenV1ProxyUpdatedV1Event,
} from "../generated/MANATokenV1/MANATokenABI"
import {
  AcceptedTokenSet as CollectionManagerV1AcceptedTokenSetV1Event,
  CommitteeMethodSet as CollectionManagerV1CommitteeMethodSetV1Event,
  CommitteeSet as CollectionManagerV1CommitteeSetV1Event,
  FeesCollectorSet as CollectionManagerV1FeesCollectorSetV1Event,
  MetaTransactionExecuted as CollectionManagerV1MetaTransactionExecutedV1Event,
  OwnershipTransferred as CollectionManagerV1OwnershipTransferredV1Event,
  RaritiesSet as CollectionManagerV1RaritiesSetV1Event,
} from "../generated/CollectionManagerV1/CollectionManagerABI"
import {
  ChangedFeesCollectorCutPerMillion as MarketplaceV1ChangedFeesCollectorCutPerMillionV1Event,
  ChangedPublicationFee as MarketplaceV1ChangedPublicationFeeV1Event,
  ChangedRoyaltiesCutPerMillion as MarketplaceV1ChangedRoyaltiesCutPerMillionV1Event,
  FeesCollectorSet as MarketplaceV1FeesCollectorSetV1Event,
  MetaTransactionExecuted as MarketplaceV1MetaTransactionExecutedV1Event,
  OrderCancelled as MarketplaceV1OrderCancelledV1Event,
  OrderCreated as MarketplaceV1OrderCreatedV1Event,
  OrderSuccessful as MarketplaceV1OrderSuccessfulV1Event,
  OwnershipTransferred as MarketplaceV1OwnershipTransferredV1Event,
  Paused as MarketplaceV1PausedV1Event,
  RoyaltiesManagerSet as MarketplaceV1RoyaltiesManagerSetV1Event,
  Unpaused as MarketplaceV1UnpausedV1Event,
  ChangedOwnerCutPerMillion as MarketplaceV1ChangedOwnerCutPerMillionV1Event,
} from "../generated/MarketplaceV1/MarketplaceABI"
import {
  ChangedFeesCollectorCutPerMillion as MarketplaceV2V1ChangedFeesCollectorCutPerMillionV1Event,
  ChangedPublicationFee as MarketplaceV2V1ChangedPublicationFeeV1Event,
  ChangedRoyaltiesCutPerMillion as MarketplaceV2V1ChangedRoyaltiesCutPerMillionV1Event,
  FeesCollectorSet as MarketplaceV2V1FeesCollectorSetV1Event,
  MetaTransactionExecuted as MarketplaceV2V1MetaTransactionExecutedV1Event,
  OrderCancelled as MarketplaceV2V1OrderCancelledV1Event,
  OrderCreated as MarketplaceV2V1OrderCreatedV1Event,
  OrderSuccessful as MarketplaceV2V1OrderSuccessfulV1Event,
  OwnershipTransferred as MarketplaceV2V1OwnershipTransferredV1Event,
  Paused as MarketplaceV2V1PausedV1Event,
  RoyaltiesManagerSet as MarketplaceV2V1RoyaltiesManagerSetV1Event,
  Unpaused as MarketplaceV2V1UnpausedV1Event,
} from "../generated/MarketplaceV2V1/MarketplaceV2ABI"
import {
  ImplementationSet as CollectionFactoryV1ImplementationSetV1Event,
  OwnershipTransferred as CollectionFactoryV1OwnershipTransferredV1Event,
  ProxyCreated as CollectionFactoryV1ProxyCreatedV1Event,
} from "../generated/CollectionFactoryV1/CollectionFactoryABI"
import {
  Bought as CollectionStoreV1BoughtV1Event,
  MetaTransactionExecuted as CollectionStoreV1MetaTransactionExecutedV1Event,
  OwnershipTransferred as CollectionStoreV1OwnershipTransferredV1Event,
  SetFee as CollectionStoreV1SetFeeV1Event,
  SetFeeOwner as CollectionStoreV1SetFeeOwnerV1Event,
} from "../generated/CollectionStoreV1/CollectionStoreABI"
import {
  AddItem as CollectionImplementationV1AddItemV1Event,
  Approval as CollectionImplementationV1ApprovalV1Event,
  ApprovalForAll as CollectionImplementationV1ApprovalForAllV1Event,
  BaseURI as CollectionImplementationV1BaseURIV1Event,
  Complete as CollectionImplementationV1CompleteV1Event,
  CreatorshipTransferred as CollectionImplementationV1CreatorshipTransferredV1Event,
  Issue as CollectionImplementationV1IssueV1Event,
  MetaTransactionExecuted as CollectionImplementationV1MetaTransactionExecutedV1Event,
  OwnershipTransferred as CollectionImplementationV1OwnershipTransferredV1Event,
  RescueItem as CollectionImplementationV1RescueItemV1Event,
  SetApproved as CollectionImplementationV1SetApprovedV1Event,
  SetEditable as CollectionImplementationV1SetEditableV1Event,
  SetGlobalManager as CollectionImplementationV1SetGlobalManagerV1Event,
  SetGlobalMinter as CollectionImplementationV1SetGlobalMinterV1Event,
  SetItemManager as CollectionImplementationV1SetItemManagerV1Event,
  SetItemMinter as CollectionImplementationV1SetItemMinterV1Event,
  Transfer as CollectionImplementationV1TransferV1Event,
  UpdateItemData as CollectionImplementationV1UpdateItemDataV1Event,
} from "../generated/CollectionImplementationV1/CollectionImplementationABI"
import { ERC721CollectionV2V1 as ProxyCreatedTemplatev1 } from "../generated/templates" // TODO

export function handleMANATokenV1ProxyOwnerUpdateV1Event(
  param: MANATokenV1ProxyOwnerUpdateV1Event
): void {
  const entity = new ManatokenV1proxyownerupdateV1E(
    `${param.transaction.hash.toHexString()}-${param.logIndex}`
  )
  entity.transactionHash = param.transaction.hash
  entity.blockNumber = param.block.number
  entity.blockTimestamp = param.block.timestamp
  entity.transactionIndex = param.transaction.index

  entity.logIndex = param.logIndex
  entity.address = param.address

  entity.in__new = param.params._new // event:  _new address address
  entity.in__old = param.params._old // event:  _old address address

  entity.save()
}

export function handleMANATokenV1ProxyUpdatedV1Event(
  param: MANATokenV1ProxyUpdatedV1Event
): void {
  const entity = new ManatokenV1proxyupdatedV1E(
    `${param.transaction.hash.toHexString()}-${param.logIndex}`
  )
  entity.transactionHash = param.transaction.hash
  entity.blockNumber = param.block.number
  entity.blockTimestamp = param.block.timestamp
  entity.transactionIndex = param.transaction.index

  entity.logIndex = param.logIndex
  entity.address = param.address

  entity.in__new = param.params._new // event:  _new address address
  entity.in__old = param.params._old // event:  _old address address

  entity.save()
}

export function handleCollectionManagerV1AcceptedTokenSetV1Event(
  param: CollectionManagerV1AcceptedTokenSetV1Event
): void {
  const entity = new CollectionmanagerV1acceptedtokensetV1E(
    `${param.transaction.hash.toHexString()}-${param.logIndex}`
  )
  entity.transactionHash = param.transaction.hash
  entity.blockNumber = param.block.number
  entity.blockTimestamp = param.block.timestamp
  entity.transactionIndex = param.transaction.index

  entity.logIndex = param.logIndex
  entity.address = param.address

  entity.in__oldAcceptedToken = param.params._oldAcceptedToken // event:  _oldAcceptedToken address contract IERC20
  entity.in__newAcceptedToken = param.params._newAcceptedToken // event:  _newAcceptedToken address contract IERC20

  entity.save()
}

export function handleCollectionManagerV1CommitteeMethodSetV1Event(
  param: CollectionManagerV1CommitteeMethodSetV1Event
): void {
  const entity = new CollectionmanagerV1committeemethodsetV1E(
    `${param.transaction.hash.toHexString()}-${param.logIndex}`
  )
  entity.transactionHash = param.transaction.hash
  entity.blockNumber = param.block.number
  entity.blockTimestamp = param.block.timestamp
  entity.transactionIndex = param.transaction.index

  entity.logIndex = param.logIndex
  entity.address = param.address

  entity.in__method = param.params._method // event:  _method bytes4 bytes4
  entity.in__isAllowed = param.params._isAllowed // event:  _isAllowed bool bool

  entity.save()
}

export function handleCollectionManagerV1CommitteeSetV1Event(
  param: CollectionManagerV1CommitteeSetV1Event
): void {
  const entity = new CollectionmanagerV1committeesetV1E(
    `${param.transaction.hash.toHexString()}-${param.logIndex}`
  )
  entity.transactionHash = param.transaction.hash
  entity.blockNumber = param.block.number
  entity.blockTimestamp = param.block.timestamp
  entity.transactionIndex = param.transaction.index

  entity.logIndex = param.logIndex
  entity.address = param.address

  entity.in__oldCommittee = param.params._oldCommittee // event:  _oldCommittee address address
  entity.in__newCommittee = param.params._newCommittee // event:  _newCommittee address address

  entity.save()
}

export function handleCollectionManagerV1FeesCollectorSetV1Event(
  param: CollectionManagerV1FeesCollectorSetV1Event
): void {
  const entity = new CollectionmanagerV1feescollectorsetV1E(
    `${param.transaction.hash.toHexString()}-${param.logIndex}`
  )
  entity.transactionHash = param.transaction.hash
  entity.blockNumber = param.block.number
  entity.blockTimestamp = param.block.timestamp
  entity.transactionIndex = param.transaction.index

  entity.logIndex = param.logIndex
  entity.address = param.address

  entity.in__oldFeesCollector = param.params._oldFeesCollector // event:  _oldFeesCollector address address
  entity.in__newFeesCollector = param.params._newFeesCollector // event:  _newFeesCollector address address

  entity.save()
}

export function handleCollectionManagerV1MetaTransactionExecutedV1Event(
  param: CollectionManagerV1MetaTransactionExecutedV1Event
): void {
  const entity = new CollectionmanagerV1metatransactiexecutedV1E(
    `${param.transaction.hash.toHexString()}-${param.logIndex}`
  )
  entity.transactionHash = param.transaction.hash
  entity.blockNumber = param.block.number
  entity.blockTimestamp = param.block.timestamp
  entity.transactionIndex = param.transaction.index

  entity.logIndex = param.logIndex
  entity.address = param.address

  entity.in_userAddress = param.params.userAddress // event:  userAddress address address
  entity.in_relayerAddress = param.params.relayerAddress // event:  relayerAddress address address
  entity.in_functionSignature = param.params.functionSignature // event:  functionSignature bytes bytes

  entity.save()
}

export function handleCollectionManagerV1OwnershipTransferredV1Event(
  param: CollectionManagerV1OwnershipTransferredV1Event
): void {
  const entity = new CollectionmanagerV1ownershiptransferredV1E(
    `${param.transaction.hash.toHexString()}-${param.logIndex}`
  )
  entity.transactionHash = param.transaction.hash
  entity.blockNumber = param.block.number
  entity.blockTimestamp = param.block.timestamp
  entity.transactionIndex = param.transaction.index

  entity.logIndex = param.logIndex
  entity.address = param.address

  entity.in_previousOwner = param.params.previousOwner // event:  previousOwner address address
  entity.in_newOwner = param.params.newOwner // event:  newOwner address address

  entity.save()
}

export function handleCollectionManagerV1RaritiesSetV1Event(
  param: CollectionManagerV1RaritiesSetV1Event
): void {
  const entity = new CollectionmanagerV1raritiessetV1E(
    `${param.transaction.hash.toHexString()}-${param.logIndex}`
  )
  entity.transactionHash = param.transaction.hash
  entity.blockNumber = param.block.number
  entity.blockTimestamp = param.block.timestamp
  entity.transactionIndex = param.transaction.index

  entity.logIndex = param.logIndex
  entity.address = param.address

  entity.in__oldRarities = param.params._oldRarities // event:  _oldRarities address contract IRarities
  entity.in__newRarities = param.params._newRarities // event:  _newRarities address contract IRarities

  entity.save()
}

export function handleMarketplaceV1ChangedFeesCollectorCutPerMillionV1Event(
  param: MarketplaceV1ChangedFeesCollectorCutPerMillionV1Event
): void {
  const entity = new MarketplaceV1chanfeescollcutpermilV1E(
    `${param.transaction.hash.toHexString()}-${param.logIndex}`
  )
  entity.transactionHash = param.transaction.hash
  entity.blockNumber = param.block.number
  entity.blockTimestamp = param.block.timestamp
  entity.transactionIndex = param.transaction.index

  entity.logIndex = param.logIndex
  entity.address = param.address

  entity.in_feesCollectorCutPerMillion = param.params.feesCollectorCutPerMillion // event:  feesCollectorCutPerMillion uint256 uint256

  entity.save()
}

export function handleMarketplaceV1ChangedPublicationFeeV1Event(
  param: MarketplaceV1ChangedPublicationFeeV1Event
): void {
  const entity = new MarketplaceV1changedpublicationfeeV1E(
    `${param.transaction.hash.toHexString()}-${param.logIndex}`
  )
  entity.transactionHash = param.transaction.hash
  entity.blockNumber = param.block.number
  entity.blockTimestamp = param.block.timestamp
  entity.transactionIndex = param.transaction.index

  entity.logIndex = param.logIndex
  entity.address = param.address

  entity.in_publicationFee = param.params.publicationFee // event:  publicationFee uint256 uint256

  entity.save()
}

export function handleMarketplaceV1ChangedRoyaltiesCutPerMillionV1Event(
  param: MarketplaceV1ChangedRoyaltiesCutPerMillionV1Event
): void {
  const entity = new MarketplaceV1changroyalcutpermilliV1E(
    `${param.transaction.hash.toHexString()}-${param.logIndex}`
  )
  entity.transactionHash = param.transaction.hash
  entity.blockNumber = param.block.number
  entity.blockTimestamp = param.block.timestamp
  entity.transactionIndex = param.transaction.index

  entity.logIndex = param.logIndex
  entity.address = param.address

  entity.in_royaltiesCutPerMillion = param.params.royaltiesCutPerMillion // event:  royaltiesCutPerMillion uint256 uint256

  entity.save()
}

export function handleMarketplaceV1FeesCollectorSetV1Event(
  param: MarketplaceV1FeesCollectorSetV1Event
): void {
  const entity = new MarketplaceV1feescollectorsetV1E(
    `${param.transaction.hash.toHexString()}-${param.logIndex}`
  )
  entity.transactionHash = param.transaction.hash
  entity.blockNumber = param.block.number
  entity.blockTimestamp = param.block.timestamp
  entity.transactionIndex = param.transaction.index

  entity.logIndex = param.logIndex
  entity.address = param.address

  entity.in_oldFeesCollector = param.params.oldFeesCollector // event:  oldFeesCollector address address
  entity.in_newFeesCollector = param.params.newFeesCollector // event:  newFeesCollector address address

  entity.save()
}

export function handleMarketplaceV1MetaTransactionExecutedV1Event(
  param: MarketplaceV1MetaTransactionExecutedV1Event
): void {
  const entity = new MarketplaceV1metatransactiexecutedV1E(
    `${param.transaction.hash.toHexString()}-${param.logIndex}`
  )
  entity.transactionHash = param.transaction.hash
  entity.blockNumber = param.block.number
  entity.blockTimestamp = param.block.timestamp
  entity.transactionIndex = param.transaction.index

  entity.logIndex = param.logIndex
  entity.address = param.address

  entity.in_userAddress = param.params.userAddress // event:  userAddress address address
  entity.in_relayerAddress = param.params.relayerAddress // event:  relayerAddress address address
  entity.in_functionSignature = param.params.functionSignature // event:  functionSignature bytes bytes

  entity.save()
}

export function handleMarketplaceV1OrderCancelledV1Event(
  param: MarketplaceV1OrderCancelledV1Event
): void {
  const entity = new MarketplaceV1ordercancelledV1E(
    `${param.transaction.hash.toHexString()}-${param.logIndex}`
  )
  entity.transactionHash = param.transaction.hash
  entity.blockNumber = param.block.number
  entity.blockTimestamp = param.block.timestamp
  entity.transactionIndex = param.transaction.index

  entity.logIndex = param.logIndex
  entity.address = param.address

  entity.in_id = param.params.id // event:  id bytes32 bytes32
  entity.in_assetId = param.params.assetId // event:  assetId uint256 uint256
  entity.in_seller = param.params.seller // event:  seller address address
  entity.in_nftAddress = param.params.nftAddress // event:  nftAddress address address

  entity.save()
}

export function handleMarketplaceV1OrderCreatedV1Event(
  param: MarketplaceV1OrderCreatedV1Event
): void {
  const entity = new MarketplaceV1ordercreatedV1E(
    `${param.transaction.hash.toHexString()}-${param.logIndex}`
  )
  entity.transactionHash = param.transaction.hash
  entity.blockNumber = param.block.number
  entity.blockTimestamp = param.block.timestamp
  entity.transactionIndex = param.transaction.index

  entity.logIndex = param.logIndex
  entity.address = param.address

  entity.in_id = param.params.id // event:  id bytes32 bytes32
  entity.in_assetId = param.params.assetId // event:  assetId uint256 uint256
  entity.in_seller = param.params.seller // event:  seller address address
  entity.in_nftAddress = param.params.nftAddress // event:  nftAddress address address
  entity.in_priceInWei = param.params.priceInWei // event:  priceInWei uint256 uint256
  entity.in_expiresAt = param.params.expiresAt // event:  expiresAt uint256 uint256

  entity.save()
}

export function handleMarketplaceV1OrderSuccessfulV1Event(
  param: MarketplaceV1OrderSuccessfulV1Event
): void {
  const entity = new MarketplaceV1ordersuccessfulV1E(
    `${param.transaction.hash.toHexString()}-${param.logIndex}`
  )
  entity.transactionHash = param.transaction.hash
  entity.blockNumber = param.block.number
  entity.blockTimestamp = param.block.timestamp
  entity.transactionIndex = param.transaction.index

  entity.logIndex = param.logIndex
  entity.address = param.address

  entity.in_id = param.params.id // event:  id bytes32 bytes32
  entity.in_assetId = param.params.assetId // event:  assetId uint256 uint256
  entity.in_seller = param.params.seller // event:  seller address address
  entity.in_nftAddress = param.params.nftAddress // event:  nftAddress address address
  entity.in_totalPrice = param.params.totalPrice // event:  totalPrice uint256 uint256
  entity.in_buyer = param.params.buyer // event:  buyer address address

  entity.save()
}

export function handleMarketplaceV1OwnershipTransferredV1Event(
  param: MarketplaceV1OwnershipTransferredV1Event
): void {
  const entity = new MarketplaceV1ownershiptransferredV1E(
    `${param.transaction.hash.toHexString()}-${param.logIndex}`
  )
  entity.transactionHash = param.transaction.hash
  entity.blockNumber = param.block.number
  entity.blockTimestamp = param.block.timestamp
  entity.transactionIndex = param.transaction.index

  entity.logIndex = param.logIndex
  entity.address = param.address

  entity.in_previousOwner = param.params.previousOwner // event:  previousOwner address address
  entity.in_newOwner = param.params.newOwner // event:  newOwner address address

  entity.save()
}

export function handleMarketplaceV1PausedV1Event(
  param: MarketplaceV1PausedV1Event
): void {
  const entity = new MarketplaceV1pausedV1E(
    `${param.transaction.hash.toHexString()}-${param.logIndex}`
  )
  entity.transactionHash = param.transaction.hash
  entity.blockNumber = param.block.number
  entity.blockTimestamp = param.block.timestamp
  entity.transactionIndex = param.transaction.index

  entity.logIndex = param.logIndex
  entity.address = param.address

  entity.in_account = param.params.account // event:  account address address

  entity.save()
}

export function handleMarketplaceV1RoyaltiesManagerSetV1Event(
  param: MarketplaceV1RoyaltiesManagerSetV1Event
): void {
  const entity = new MarketplaceV1royaltiesmanagersetV1E(
    `${param.transaction.hash.toHexString()}-${param.logIndex}`
  )
  entity.transactionHash = param.transaction.hash
  entity.blockNumber = param.block.number
  entity.blockTimestamp = param.block.timestamp
  entity.transactionIndex = param.transaction.index

  entity.logIndex = param.logIndex
  entity.address = param.address

  entity.in_oldRoyaltiesManager = param.params.oldRoyaltiesManager // event:  oldRoyaltiesManager address contract IRoyaltiesManager
  entity.in_newRoyaltiesManager = param.params.newRoyaltiesManager // event:  newRoyaltiesManager address contract IRoyaltiesManager

  entity.save()
}

export function handleMarketplaceV1UnpausedV1Event(
  param: MarketplaceV1UnpausedV1Event
): void {
  const entity = new MarketplaceV1unpausedV1E(
    `${param.transaction.hash.toHexString()}-${param.logIndex}`
  )
  entity.transactionHash = param.transaction.hash
  entity.blockNumber = param.block.number
  entity.blockTimestamp = param.block.timestamp
  entity.transactionIndex = param.transaction.index

  entity.logIndex = param.logIndex
  entity.address = param.address

  entity.in_account = param.params.account // event:  account address address

  entity.save()
}

export function handleMarketplaceV1ChangedOwnerCutPerMillionV1Event(
  param: MarketplaceV1ChangedOwnerCutPerMillionV1Event
): void {
  const entity = new MarketplaceV1changownercutpermilliV1E(
    `${param.transaction.hash.toHexString()}-${param.logIndex}`
  )
  entity.transactionHash = param.transaction.hash
  entity.blockNumber = param.block.number
  entity.blockTimestamp = param.block.timestamp
  entity.transactionIndex = param.transaction.index

  entity.logIndex = param.logIndex
  entity.address = param.address

  entity.in_ownerCutPerMillion = param.params.ownerCutPerMillion // event:  ownerCutPerMillion uint256 uint256

  entity.save()
}

export function handleMarketplaceV2V1ChangedFeesCollectorCutPerMillionV1Event(
  param: MarketplaceV2V1ChangedFeesCollectorCutPerMillionV1Event
): void {
  const entity = new Marketplacev2V1chanfeescollcutpermilV1E(
    `${param.transaction.hash.toHexString()}-${param.logIndex}`
  )
  entity.transactionHash = param.transaction.hash
  entity.blockNumber = param.block.number
  entity.blockTimestamp = param.block.timestamp
  entity.transactionIndex = param.transaction.index

  entity.logIndex = param.logIndex
  entity.address = param.address

  entity.in_feesCollectorCutPerMillion = param.params.feesCollectorCutPerMillion // event:  feesCollectorCutPerMillion uint256 uint256

  entity.save()
}

export function handleMarketplaceV2V1ChangedPublicationFeeV1Event(
  param: MarketplaceV2V1ChangedPublicationFeeV1Event
): void {
  const entity = new Marketplacev2V1changedpublicationfeeV1E(
    `${param.transaction.hash.toHexString()}-${param.logIndex}`
  )
  entity.transactionHash = param.transaction.hash
  entity.blockNumber = param.block.number
  entity.blockTimestamp = param.block.timestamp
  entity.transactionIndex = param.transaction.index

  entity.logIndex = param.logIndex
  entity.address = param.address

  entity.in_publicationFee = param.params.publicationFee // event:  publicationFee uint256 uint256

  entity.save()
}

export function handleMarketplaceV2V1ChangedRoyaltiesCutPerMillionV1Event(
  param: MarketplaceV2V1ChangedRoyaltiesCutPerMillionV1Event
): void {
  const entity = new Marketplacev2V1changroyalcutpermilliV1E(
    `${param.transaction.hash.toHexString()}-${param.logIndex}`
  )
  entity.transactionHash = param.transaction.hash
  entity.blockNumber = param.block.number
  entity.blockTimestamp = param.block.timestamp
  entity.transactionIndex = param.transaction.index

  entity.logIndex = param.logIndex
  entity.address = param.address

  entity.in_royaltiesCutPerMillion = param.params.royaltiesCutPerMillion // event:  royaltiesCutPerMillion uint256 uint256

  entity.save()
}

export function handleMarketplaceV2V1FeesCollectorSetV1Event(
  param: MarketplaceV2V1FeesCollectorSetV1Event
): void {
  const entity = new Marketplacev2V1feescollectorsetV1E(
    `${param.transaction.hash.toHexString()}-${param.logIndex}`
  )
  entity.transactionHash = param.transaction.hash
  entity.blockNumber = param.block.number
  entity.blockTimestamp = param.block.timestamp
  entity.transactionIndex = param.transaction.index

  entity.logIndex = param.logIndex
  entity.address = param.address

  entity.in_oldFeesCollector = param.params.oldFeesCollector // event:  oldFeesCollector address address
  entity.in_newFeesCollector = param.params.newFeesCollector // event:  newFeesCollector address address

  entity.save()
}

export function handleMarketplaceV2V1MetaTransactionExecutedV1Event(
  param: MarketplaceV2V1MetaTransactionExecutedV1Event
): void {
  const entity = new Marketplacev2V1metatransactiexecutedV1E(
    `${param.transaction.hash.toHexString()}-${param.logIndex}`
  )
  entity.transactionHash = param.transaction.hash
  entity.blockNumber = param.block.number
  entity.blockTimestamp = param.block.timestamp
  entity.transactionIndex = param.transaction.index

  entity.logIndex = param.logIndex
  entity.address = param.address

  entity.in_userAddress = param.params.userAddress // event:  userAddress address address
  entity.in_relayerAddress = param.params.relayerAddress // event:  relayerAddress address address
  entity.in_functionSignature = param.params.functionSignature // event:  functionSignature bytes bytes

  entity.save()
}

export function handleMarketplaceV2V1OrderCancelledV1Event(
  param: MarketplaceV2V1OrderCancelledV1Event
): void {
  const entity = new Marketplacev2V1ordercancelledV1E(
    `${param.transaction.hash.toHexString()}-${param.logIndex}`
  )
  entity.transactionHash = param.transaction.hash
  entity.blockNumber = param.block.number
  entity.blockTimestamp = param.block.timestamp
  entity.transactionIndex = param.transaction.index

  entity.logIndex = param.logIndex
  entity.address = param.address

  entity.in_id = param.params.id // event:  id bytes32 bytes32
  entity.in_assetId = param.params.assetId // event:  assetId uint256 uint256
  entity.in_seller = param.params.seller // event:  seller address address
  entity.in_nftAddress = param.params.nftAddress // event:  nftAddress address address

  entity.save()
}

export function handleMarketplaceV2V1OrderCreatedV1Event(
  param: MarketplaceV2V1OrderCreatedV1Event
): void {
  const entity = new Marketplacev2V1ordercreatedV1E(
    `${param.transaction.hash.toHexString()}-${param.logIndex}`
  )
  entity.transactionHash = param.transaction.hash
  entity.blockNumber = param.block.number
  entity.blockTimestamp = param.block.timestamp
  entity.transactionIndex = param.transaction.index

  entity.logIndex = param.logIndex
  entity.address = param.address

  entity.in_id = param.params.id // event:  id bytes32 bytes32
  entity.in_assetId = param.params.assetId // event:  assetId uint256 uint256
  entity.in_seller = param.params.seller // event:  seller address address
  entity.in_nftAddress = param.params.nftAddress // event:  nftAddress address address
  entity.in_priceInWei = param.params.priceInWei // event:  priceInWei uint256 uint256
  entity.in_expiresAt = param.params.expiresAt // event:  expiresAt uint256 uint256

  entity.save()
}

export function handleMarketplaceV2V1OrderSuccessfulV1Event(
  param: MarketplaceV2V1OrderSuccessfulV1Event
): void {
  const entity = new Marketplacev2V1ordersuccessfulV1E(
    `${param.transaction.hash.toHexString()}-${param.logIndex}`
  )
  entity.transactionHash = param.transaction.hash
  entity.blockNumber = param.block.number
  entity.blockTimestamp = param.block.timestamp
  entity.transactionIndex = param.transaction.index

  entity.logIndex = param.logIndex
  entity.address = param.address

  entity.in_id = param.params.id // event:  id bytes32 bytes32
  entity.in_assetId = param.params.assetId // event:  assetId uint256 uint256
  entity.in_seller = param.params.seller // event:  seller address address
  entity.in_nftAddress = param.params.nftAddress // event:  nftAddress address address
  entity.in_totalPrice = param.params.totalPrice // event:  totalPrice uint256 uint256
  entity.in_buyer = param.params.buyer // event:  buyer address address

  entity.save()
}

export function handleMarketplaceV2V1OwnershipTransferredV1Event(
  param: MarketplaceV2V1OwnershipTransferredV1Event
): void {
  const entity = new Marketplacev2V1ownershiptransferredV1E(
    `${param.transaction.hash.toHexString()}-${param.logIndex}`
  )
  entity.transactionHash = param.transaction.hash
  entity.blockNumber = param.block.number
  entity.blockTimestamp = param.block.timestamp
  entity.transactionIndex = param.transaction.index

  entity.logIndex = param.logIndex
  entity.address = param.address

  entity.in_previousOwner = param.params.previousOwner // event:  previousOwner address address
  entity.in_newOwner = param.params.newOwner // event:  newOwner address address

  entity.save()
}

export function handleMarketplaceV2V1PausedV1Event(
  param: MarketplaceV2V1PausedV1Event
): void {
  const entity = new Marketplacev2V1pausedV1E(
    `${param.transaction.hash.toHexString()}-${param.logIndex}`
  )
  entity.transactionHash = param.transaction.hash
  entity.blockNumber = param.block.number
  entity.blockTimestamp = param.block.timestamp
  entity.transactionIndex = param.transaction.index

  entity.logIndex = param.logIndex
  entity.address = param.address

  entity.in_account = param.params.account // event:  account address address

  entity.save()
}

export function handleMarketplaceV2V1RoyaltiesManagerSetV1Event(
  param: MarketplaceV2V1RoyaltiesManagerSetV1Event
): void {
  const entity = new Marketplacev2V1royaltiesmanagersetV1E(
    `${param.transaction.hash.toHexString()}-${param.logIndex}`
  )
  entity.transactionHash = param.transaction.hash
  entity.blockNumber = param.block.number
  entity.blockTimestamp = param.block.timestamp
  entity.transactionIndex = param.transaction.index

  entity.logIndex = param.logIndex
  entity.address = param.address

  entity.in_oldRoyaltiesManager = param.params.oldRoyaltiesManager // event:  oldRoyaltiesManager address contract IRoyaltiesManager
  entity.in_newRoyaltiesManager = param.params.newRoyaltiesManager // event:  newRoyaltiesManager address contract IRoyaltiesManager

  entity.save()
}

export function handleMarketplaceV2V1UnpausedV1Event(
  param: MarketplaceV2V1UnpausedV1Event
): void {
  const entity = new Marketplacev2V1unpausedV1E(
    `${param.transaction.hash.toHexString()}-${param.logIndex}`
  )
  entity.transactionHash = param.transaction.hash
  entity.blockNumber = param.block.number
  entity.blockTimestamp = param.block.timestamp
  entity.transactionIndex = param.transaction.index

  entity.logIndex = param.logIndex
  entity.address = param.address

  entity.in_account = param.params.account // event:  account address address

  entity.save()
}

export function handleCollectionFactoryV1ImplementationSetV1Event(
  param: CollectionFactoryV1ImplementationSetV1Event
): void {
  const entity = new CollectionfactoryV1implementationsetV1E(
    `${param.transaction.hash.toHexString()}-${param.logIndex}`
  )
  entity.transactionHash = param.transaction.hash
  entity.blockNumber = param.block.number
  entity.blockTimestamp = param.block.timestamp
  entity.transactionIndex = param.transaction.index

  entity.logIndex = param.logIndex
  entity.address = param.address

  entity.in__implementation = param.params._implementation // event:  _implementation address address
  entity.in__codeHash = param.params._codeHash // event:  _codeHash bytes32 bytes32
  entity.in__code = param.params._code // event:  _code bytes bytes

  entity.save()
}

export function handleCollectionFactoryV1OwnershipTransferredV1Event(
  param: CollectionFactoryV1OwnershipTransferredV1Event
): void {
  const entity = new CollectionfactoryV1ownershiptransferredV1E(
    `${param.transaction.hash.toHexString()}-${param.logIndex}`
  )
  entity.transactionHash = param.transaction.hash
  entity.blockNumber = param.block.number
  entity.blockTimestamp = param.block.timestamp
  entity.transactionIndex = param.transaction.index

  entity.logIndex = param.logIndex
  entity.address = param.address

  entity.in_previousOwner = param.params.previousOwner // event:  previousOwner address address
  entity.in_newOwner = param.params.newOwner // event:  newOwner address address

  entity.save()
}

export function handleCollectionFactoryV1ProxyCreatedV1Event(
  param: CollectionFactoryV1ProxyCreatedV1Event
): void {
  ProxyCreatedTemplatev1.create(param.params._address)
  const entity = new CollectionfactoryV1proxycreatedV1E(
    `${param.transaction.hash.toHexString()}-${param.logIndex}`
  )
  entity.transactionHash = param.transaction.hash
  entity.blockNumber = param.block.number
  entity.blockTimestamp = param.block.timestamp
  entity.transactionIndex = param.transaction.index

  entity.logIndex = param.logIndex
  entity.address = param.address

  entity.in__address = param.params._address // event:  _address address address
  entity.in__salt = param.params._salt // event:  _salt bytes32 bytes32

  entity.save()
}

/* This is template and no code to be added SCR name: ERC721CollectionV2, address: 0x3E1C64aB59580882642d2fB7Ba0Fc1c3Abd243F0  abi nameAddItem */
/* This is template and no code to be added SCR name: ERC721CollectionV2, address: 0x3E1C64aB59580882642d2fB7Ba0Fc1c3Abd243F0  abi nameApproval */
/* This is template and no code to be added SCR name: ERC721CollectionV2, address: 0x3E1C64aB59580882642d2fB7Ba0Fc1c3Abd243F0  abi nameApprovalForAll */
/* This is template and no code to be added SCR name: ERC721CollectionV2, address: 0x3E1C64aB59580882642d2fB7Ba0Fc1c3Abd243F0  abi nameBaseURI */
/* This is template and no code to be added SCR name: ERC721CollectionV2, address: 0x3E1C64aB59580882642d2fB7Ba0Fc1c3Abd243F0  abi nameComplete */
/* This is template and no code to be added SCR name: ERC721CollectionV2, address: 0x3E1C64aB59580882642d2fB7Ba0Fc1c3Abd243F0  abi nameCreatorshipTransferred */
/* This is template and no code to be added SCR name: ERC721CollectionV2, address: 0x3E1C64aB59580882642d2fB7Ba0Fc1c3Abd243F0  abi nameIssue */
/* This is template and no code to be added SCR name: ERC721CollectionV2, address: 0x3E1C64aB59580882642d2fB7Ba0Fc1c3Abd243F0  abi nameMetaTransactionExecuted */
/* This is template and no code to be added SCR name: ERC721CollectionV2, address: 0x3E1C64aB59580882642d2fB7Ba0Fc1c3Abd243F0  abi nameOwnershipTransferred */
/* This is template and no code to be added SCR name: ERC721CollectionV2, address: 0x3E1C64aB59580882642d2fB7Ba0Fc1c3Abd243F0  abi nameRescueItem */
/* This is template and no code to be added SCR name: ERC721CollectionV2, address: 0x3E1C64aB59580882642d2fB7Ba0Fc1c3Abd243F0  abi nameSetApproved */
/* This is template and no code to be added SCR name: ERC721CollectionV2, address: 0x3E1C64aB59580882642d2fB7Ba0Fc1c3Abd243F0  abi nameSetEditable */
/* This is template and no code to be added SCR name: ERC721CollectionV2, address: 0x3E1C64aB59580882642d2fB7Ba0Fc1c3Abd243F0  abi nameSetGlobalManager */
/* This is template and no code to be added SCR name: ERC721CollectionV2, address: 0x3E1C64aB59580882642d2fB7Ba0Fc1c3Abd243F0  abi nameSetGlobalMinter */
/* This is template and no code to be added SCR name: ERC721CollectionV2, address: 0x3E1C64aB59580882642d2fB7Ba0Fc1c3Abd243F0  abi nameSetItemManager */
/* This is template and no code to be added SCR name: ERC721CollectionV2, address: 0x3E1C64aB59580882642d2fB7Ba0Fc1c3Abd243F0  abi nameSetItemMinter */
/* This is template and no code to be added SCR name: ERC721CollectionV2, address: 0x3E1C64aB59580882642d2fB7Ba0Fc1c3Abd243F0  abi nameTransfer */
/* This is template and no code to be added SCR name: ERC721CollectionV2, address: 0x3E1C64aB59580882642d2fB7Ba0Fc1c3Abd243F0  abi nameUpdateItemData */

export function handleCollectionStoreV1BoughtV1Event(
  param: CollectionStoreV1BoughtV1Event
): void {
  const entity = new CollectionstoreV1boughtV1E(
    `${param.transaction.hash.toHexString()}-${param.logIndex}`
  )
  entity.transactionHash = param.transaction.hash
  entity.blockNumber = param.block.number
  entity.blockTimestamp = param.block.timestamp
  entity.transactionIndex = param.transaction.index

  entity.logIndex = param.logIndex
  entity.address = param.address

  entity.in__itemsToBuy_collection = param.params._itemsToBuy.map<Bytes>(
    (e) => e.collection
  ) /* componentType: address */
  entity.in__itemsToBuy_ids = param.params._itemsToBuy.map<BigInt>(
    (e) => e.ids
  ) /* componentType: uint256[] */
  entity.in__itemsToBuy_prices = param.params._itemsToBuy.map<BigInt>(
    (e) => e.prices
  ) /* componentType: uint256[] */
  entity.in__itemsToBuy_beneficiaries = param.params._itemsToBuy.map<Bytes>(
    (e) => e.beneficiaries
  ) /* componentType: address[] */

  entity.save()
}

export function handleCollectionStoreV1MetaTransactionExecutedV1Event(
  param: CollectionStoreV1MetaTransactionExecutedV1Event
): void {
  const entity = new CollectionstoreV1metatransactiexecutedV1E(
    `${param.transaction.hash.toHexString()}-${param.logIndex}`
  )
  entity.transactionHash = param.transaction.hash
  entity.blockNumber = param.block.number
  entity.blockTimestamp = param.block.timestamp
  entity.transactionIndex = param.transaction.index

  entity.logIndex = param.logIndex
  entity.address = param.address

  entity.in_userAddress = param.params.userAddress // event:  userAddress address address
  entity.in_relayerAddress = param.params.relayerAddress // event:  relayerAddress address address
  entity.in_functionSignature = param.params.functionSignature // event:  functionSignature bytes bytes

  entity.save()
}

export function handleCollectionStoreV1OwnershipTransferredV1Event(
  param: CollectionStoreV1OwnershipTransferredV1Event
): void {
  const entity = new CollectionstoreV1ownershiptransferredV1E(
    `${param.transaction.hash.toHexString()}-${param.logIndex}`
  )
  entity.transactionHash = param.transaction.hash
  entity.blockNumber = param.block.number
  entity.blockTimestamp = param.block.timestamp
  entity.transactionIndex = param.transaction.index

  entity.logIndex = param.logIndex
  entity.address = param.address

  entity.in_previousOwner = param.params.previousOwner // event:  previousOwner address address
  entity.in_newOwner = param.params.newOwner // event:  newOwner address address

  entity.save()
}

export function handleCollectionStoreV1SetFeeV1Event(
  param: CollectionStoreV1SetFeeV1Event
): void {
  const entity = new CollectionstoreV1setfeeV1E(
    `${param.transaction.hash.toHexString()}-${param.logIndex}`
  )
  entity.transactionHash = param.transaction.hash
  entity.blockNumber = param.block.number
  entity.blockTimestamp = param.block.timestamp
  entity.transactionIndex = param.transaction.index

  entity.logIndex = param.logIndex
  entity.address = param.address

  entity.in__oldFee = param.params._oldFee // event:  _oldFee uint256 uint256
  entity.in__newFee = param.params._newFee // event:  _newFee uint256 uint256

  entity.save()
}

export function handleCollectionStoreV1SetFeeOwnerV1Event(
  param: CollectionStoreV1SetFeeOwnerV1Event
): void {
  const entity = new CollectionstoreV1setfeeownerV1E(
    `${param.transaction.hash.toHexString()}-${param.logIndex}`
  )
  entity.transactionHash = param.transaction.hash
  entity.blockNumber = param.block.number
  entity.blockTimestamp = param.block.timestamp
  entity.transactionIndex = param.transaction.index

  entity.logIndex = param.logIndex
  entity.address = param.address

  entity.in__oldFeeOwner = param.params._oldFeeOwner // event:  _oldFeeOwner address address
  entity.in__newFeeOwner = param.params._newFeeOwner // event:  _newFeeOwner address address

  entity.save()
}

export function handleCollectionImplementationV1AddItemV1Event(
  param: CollectionImplementationV1AddItemV1Event
): void {
  const entity = new CollectionimplementationV1additemV1E(
    `${param.transaction.hash.toHexString()}-${param.logIndex}`
  )
  entity.transactionHash = param.transaction.hash
  entity.blockNumber = param.block.number
  entity.blockTimestamp = param.block.timestamp
  entity.transactionIndex = param.transaction.index

  entity.logIndex = param.logIndex
  entity.address = param.address

  entity.in__itemId = param.params._itemId // event:  _itemId uint256 uint256
  entity.in__item_rarity = param.params._item.rarity
  entity.in__item_maxSupply = param.params._item.maxSupply
  entity.in__item_totalSupply = param.params._item.totalSupply
  entity.in__item_price = param.params._item.price
  entity.in__item_beneficiary = param.params._item.beneficiary
  entity.in__item_metadata = param.params._item.metadata
  entity.in__item_contentHash = param.params._item.contentHash

  entity.save()
}

export function handleCollectionImplementationV1ApprovalV1Event(
  param: CollectionImplementationV1ApprovalV1Event
): void {
  const entity = new CollectionimplementationV1approvalV1E(
    `${param.transaction.hash.toHexString()}-${param.logIndex}`
  )
  entity.transactionHash = param.transaction.hash
  entity.blockNumber = param.block.number
  entity.blockTimestamp = param.block.timestamp
  entity.transactionIndex = param.transaction.index

  entity.logIndex = param.logIndex
  entity.address = param.address

  entity.in_owner = param.params.owner // event:  owner address address
  entity.in_approved = param.params.approved // event:  approved address address
  entity.in_tokenId = param.params.tokenId // event:  tokenId uint256 uint256

  entity.save()
}

export function handleCollectionImplementationV1ApprovalForAllV1Event(
  param: CollectionImplementationV1ApprovalForAllV1Event
): void {
  const entity = new CollectionimplementationV1approvalforallV1E(
    `${param.transaction.hash.toHexString()}-${param.logIndex}`
  )
  entity.transactionHash = param.transaction.hash
  entity.blockNumber = param.block.number
  entity.blockTimestamp = param.block.timestamp
  entity.transactionIndex = param.transaction.index

  entity.logIndex = param.logIndex
  entity.address = param.address

  entity.in_owner = param.params.owner // event:  owner address address
  entity.in_operator = param.params.operator // event:  operator address address
  entity.in_approved = param.params.approved // event:  approved bool bool

  entity.save()
}

export function handleCollectionImplementationV1BaseURIV1Event(
  param: CollectionImplementationV1BaseURIV1Event
): void {
  const entity = new CollectionimplementationV1baseuriV1E(
    `${param.transaction.hash.toHexString()}-${param.logIndex}`
  )
  entity.transactionHash = param.transaction.hash
  entity.blockNumber = param.block.number
  entity.blockTimestamp = param.block.timestamp
  entity.transactionIndex = param.transaction.index

  entity.logIndex = param.logIndex
  entity.address = param.address

  entity.in__oldBaseURI = param.params._oldBaseURI // event:  _oldBaseURI string string
  entity.in__newBaseURI = param.params._newBaseURI // event:  _newBaseURI string string

  entity.save()
}

export function handleCollectionImplementationV1CompleteV1Event(
  param: CollectionImplementationV1CompleteV1Event
): void {
  const entity = new CollectionimplementationV1completeV1E(
    `${param.transaction.hash.toHexString()}-${param.logIndex}`
  )
  entity.transactionHash = param.transaction.hash
  entity.blockNumber = param.block.number
  entity.blockTimestamp = param.block.timestamp
  entity.transactionIndex = param.transaction.index

  entity.logIndex = param.logIndex
  entity.address = param.address

  entity.save()
}

export function handleCollectionImplementationV1CreatorshipTransferredV1Event(
  param: CollectionImplementationV1CreatorshipTransferredV1Event
): void {
  const entity = new CollectionimplementationV1creatorshiptransferreV1E(
    `${param.transaction.hash.toHexString()}-${param.logIndex}`
  )
  entity.transactionHash = param.transaction.hash
  entity.blockNumber = param.block.number
  entity.blockTimestamp = param.block.timestamp
  entity.transactionIndex = param.transaction.index

  entity.logIndex = param.logIndex
  entity.address = param.address

  entity.in__previousCreator = param.params._previousCreator // event:  _previousCreator address address
  entity.in__newCreator = param.params._newCreator // event:  _newCreator address address

  entity.save()
}

export function handleCollectionImplementationV1IssueV1Event(
  param: CollectionImplementationV1IssueV1Event
): void {
  const entity = new CollectionimplementationV1issueV1E(
    `${param.transaction.hash.toHexString()}-${param.logIndex}`
  )
  entity.transactionHash = param.transaction.hash
  entity.blockNumber = param.block.number
  entity.blockTimestamp = param.block.timestamp
  entity.transactionIndex = param.transaction.index

  entity.logIndex = param.logIndex
  entity.address = param.address

  entity.in__beneficiary = param.params._beneficiary // event:  _beneficiary address address
  entity.in__tokenId = param.params._tokenId // event:  _tokenId uint256 uint256
  entity.in__itemId = param.params._itemId // event:  _itemId uint256 uint256
  entity.in__issuedId = param.params._issuedId // event:  _issuedId uint256 uint256
  entity.in__caller = param.params._caller // event:  _caller address address

  entity.save()
}

export function handleCollectionImplementationV1MetaTransactionExecutedV1Event(
  param: CollectionImplementationV1MetaTransactionExecutedV1Event
): void {
  const entity = new CollectionimplementationV1metatransactiexecutedV1E(
    `${param.transaction.hash.toHexString()}-${param.logIndex}`
  )
  entity.transactionHash = param.transaction.hash
  entity.blockNumber = param.block.number
  entity.blockTimestamp = param.block.timestamp
  entity.transactionIndex = param.transaction.index

  entity.logIndex = param.logIndex
  entity.address = param.address

  entity.in_userAddress = param.params.userAddress // event:  userAddress address address
  entity.in_relayerAddress = param.params.relayerAddress // event:  relayerAddress address address
  entity.in_functionSignature = param.params.functionSignature // event:  functionSignature bytes bytes

  entity.save()
}

export function handleCollectionImplementationV1OwnershipTransferredV1Event(
  param: CollectionImplementationV1OwnershipTransferredV1Event
): void {
  const entity = new CollectionimplementationV1ownershiptransferredV1E(
    `${param.transaction.hash.toHexString()}-${param.logIndex}`
  )
  entity.transactionHash = param.transaction.hash
  entity.blockNumber = param.block.number
  entity.blockTimestamp = param.block.timestamp
  entity.transactionIndex = param.transaction.index

  entity.logIndex = param.logIndex
  entity.address = param.address

  entity.in_previousOwner = param.params.previousOwner // event:  previousOwner address address
  entity.in_newOwner = param.params.newOwner // event:  newOwner address address

  entity.save()
}

export function handleCollectionImplementationV1RescueItemV1Event(
  param: CollectionImplementationV1RescueItemV1Event
): void {
  const entity = new CollectionimplementationV1rescueitemV1E(
    `${param.transaction.hash.toHexString()}-${param.logIndex}`
  )
  entity.transactionHash = param.transaction.hash
  entity.blockNumber = param.block.number
  entity.blockTimestamp = param.block.timestamp
  entity.transactionIndex = param.transaction.index

  entity.logIndex = param.logIndex
  entity.address = param.address

  entity.in__itemId = param.params._itemId // event:  _itemId uint256 uint256
  entity.in__contentHash = param.params._contentHash // event:  _contentHash string string
  entity.in__metadata = param.params._metadata // event:  _metadata string string

  entity.save()
}

export function handleCollectionImplementationV1SetApprovedV1Event(
  param: CollectionImplementationV1SetApprovedV1Event
): void {
  const entity = new CollectionimplementationV1setapprovedV1E(
    `${param.transaction.hash.toHexString()}-${param.logIndex}`
  )
  entity.transactionHash = param.transaction.hash
  entity.blockNumber = param.block.number
  entity.blockTimestamp = param.block.timestamp
  entity.transactionIndex = param.transaction.index

  entity.logIndex = param.logIndex
  entity.address = param.address

  entity.in__previousValue = param.params._previousValue // event:  _previousValue bool bool
  entity.in__newValue = param.params._newValue // event:  _newValue bool bool

  entity.save()
}

export function handleCollectionImplementationV1SetEditableV1Event(
  param: CollectionImplementationV1SetEditableV1Event
): void {
  const entity = new CollectionimplementationV1seteditableV1E(
    `${param.transaction.hash.toHexString()}-${param.logIndex}`
  )
  entity.transactionHash = param.transaction.hash
  entity.blockNumber = param.block.number
  entity.blockTimestamp = param.block.timestamp
  entity.transactionIndex = param.transaction.index

  entity.logIndex = param.logIndex
  entity.address = param.address

  entity.in__previousValue = param.params._previousValue // event:  _previousValue bool bool
  entity.in__newValue = param.params._newValue // event:  _newValue bool bool

  entity.save()
}

export function handleCollectionImplementationV1SetGlobalManagerV1Event(
  param: CollectionImplementationV1SetGlobalManagerV1Event
): void {
  const entity = new CollectionimplementationV1setglobalmanagerV1E(
    `${param.transaction.hash.toHexString()}-${param.logIndex}`
  )
  entity.transactionHash = param.transaction.hash
  entity.blockNumber = param.block.number
  entity.blockTimestamp = param.block.timestamp
  entity.transactionIndex = param.transaction.index

  entity.logIndex = param.logIndex
  entity.address = param.address

  entity.in__manager = param.params._manager // event:  _manager address address
  entity.in__value = param.params._value // event:  _value bool bool

  entity.save()
}

export function handleCollectionImplementationV1SetGlobalMinterV1Event(
  param: CollectionImplementationV1SetGlobalMinterV1Event
): void {
  const entity = new CollectionimplementationV1setglobalminterV1E(
    `${param.transaction.hash.toHexString()}-${param.logIndex}`
  )
  entity.transactionHash = param.transaction.hash
  entity.blockNumber = param.block.number
  entity.blockTimestamp = param.block.timestamp
  entity.transactionIndex = param.transaction.index

  entity.logIndex = param.logIndex
  entity.address = param.address

  entity.in__minter = param.params._minter // event:  _minter address address
  entity.in__value = param.params._value // event:  _value bool bool

  entity.save()
}

export function handleCollectionImplementationV1SetItemManagerV1Event(
  param: CollectionImplementationV1SetItemManagerV1Event
): void {
  const entity = new CollectionimplementationV1setitemmanagerV1E(
    `${param.transaction.hash.toHexString()}-${param.logIndex}`
  )
  entity.transactionHash = param.transaction.hash
  entity.blockNumber = param.block.number
  entity.blockTimestamp = param.block.timestamp
  entity.transactionIndex = param.transaction.index

  entity.logIndex = param.logIndex
  entity.address = param.address

  entity.in__itemId = param.params._itemId // event:  _itemId uint256 uint256
  entity.in__manager = param.params._manager // event:  _manager address address
  entity.in__value = param.params._value // event:  _value bool bool

  entity.save()
}

export function handleCollectionImplementationV1SetItemMinterV1Event(
  param: CollectionImplementationV1SetItemMinterV1Event
): void {
  const entity = new CollectionimplementationV1setitemminterV1E(
    `${param.transaction.hash.toHexString()}-${param.logIndex}`
  )
  entity.transactionHash = param.transaction.hash
  entity.blockNumber = param.block.number
  entity.blockTimestamp = param.block.timestamp
  entity.transactionIndex = param.transaction.index

  entity.logIndex = param.logIndex
  entity.address = param.address

  entity.in__itemId = param.params._itemId // event:  _itemId uint256 uint256
  entity.in__minter = param.params._minter // event:  _minter address address
  entity.in__value = param.params._value // event:  _value uint256 uint256

  entity.save()
}

export function handleCollectionImplementationV1TransferV1Event(
  param: CollectionImplementationV1TransferV1Event
): void {
  const entity = new CollectionimplementationV1transferV1E(
    `${param.transaction.hash.toHexString()}-${param.logIndex}`
  )
  entity.transactionHash = param.transaction.hash
  entity.blockNumber = param.block.number
  entity.blockTimestamp = param.block.timestamp
  entity.transactionIndex = param.transaction.index

  entity.logIndex = param.logIndex
  entity.address = param.address

  entity.in_from = param.params.from // event:  from address address
  entity.in_to = param.params.to // event:  to address address
  entity.in_tokenId = param.params.tokenId // event:  tokenId uint256 uint256

  entity.save()
}

export function handleCollectionImplementationV1UpdateItemDataV1Event(
  param: CollectionImplementationV1UpdateItemDataV1Event
): void {
  const entity = new CollectionimplementationV1updateitemdataV1E(
    `${param.transaction.hash.toHexString()}-${param.logIndex}`
  )
  entity.transactionHash = param.transaction.hash
  entity.blockNumber = param.block.number
  entity.blockTimestamp = param.block.timestamp
  entity.transactionIndex = param.transaction.index

  entity.logIndex = param.logIndex
  entity.address = param.address

  entity.in__itemId = param.params._itemId // event:  _itemId uint256 uint256
  entity.in__price = param.params._price // event:  _price uint256 uint256
  entity.in__beneficiary = param.params._beneficiary // event:  _beneficiary address address
  entity.in__metadata = param.params._metadata // event:  _metadata string string

  entity.save()
}
